/**
 * Amaze UI Touch Building Tasks
 *
 * @author Minwe <minwe@yunshipei.com>
 */

import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import runSequence from 'run-sequence';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';
import browserify from'browserify';
import watchify from'watchify';
import source from'vinyl-source-stream';
import buffer from'vinyl-buffer';
import merge from 'merge-stream';
import markedify from 'markedify';
import BS from 'browser-sync';
import pkg from './package.json';
import getMarked from './docs/_utils/getMarked';

const ENV = process.env.NODE_ENV;
const $ = gulpLoadPlugins();
const isProduction = ENV === 'production' || ENV === 'travisci';
const banner = `/** ${pkg.title} v${pkg.version} | by Amaze UI Team
  * (c) ${$.util.date(Date.now(), 'UTC:yyyy')} AllMobilize, Inc., Licensed under ${pkg.license}
  * ${$.util.date(Date.now(), 'isoDateTime')}
  */
  `;

const paths = {
  scss: 'src/scss/amazeui.touch.scss',
  scssModules: 'src/scss/**/*.scss',
  fonts: 'src/fonts/*',
  jsEntry: 'src/js/index.js',
  dist: 'dist',
};

const docsDir = 'docs/_app';
const docsPaths = {
  js: `${docsDir}/js/app.js`,
  styleDir: `${docsDir}/style`,
  style: `${docsDir}/style/app.scss`,
  dist: 'www',
  ksEntry: 'kitchen-sink/app.js',
  ksIndex: 'kitchen-sink/index.html',
  ksDist: 'www/kitchen-sink'
};

const autoprefixerOptions = {
  browsers: ['> 1%', 'last 2 versions', 'ie 10']
};

const replaceVersion = function() {
  return $.replace('__VERSION__', pkg.version);
};

const addBanner = function() {
  return $.header(banner);
};

const buildBanner = function() {
  return $.header(`/*! Updated: ${$.util.date(Date.now(), 'isoDateTime')} */`);
};

gulp.task('clean', () => {
  return del(['dist', 'www', 'lib']);
});

/**
 * Build Amaze UI Touch
 */

gulp.task('build:clean', () => {
  return del([paths.dist, 'lib']);
});

gulp.task('style:scss', () => {
  return gulp.src(paths.scss)
    .pipe($.sass({
      outputStyle: 'expanded'
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(autoprefixerOptions))
    .pipe(addBanner())
    .pipe(gulp.dest(paths.dist))
    .pipe($.if(!isProduction, gulp.dest(docsPaths.ksDist)))
    .pipe($.csso())
    .pipe(addBanner())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dist))
    .pipe($.if(isProduction, gulp.dest(docsPaths.ksDist)));
});

gulp.task('style:fonts', () => {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest(paths.dist + '/fonts'))
    .pipe(gulp.dest(docsPaths.ksDist + '/fonts'));
});

gulp.task('style:watch', () => {
  gulp.watch(paths.scssModules, ['style:scss']);
});

gulp.task('style', ['style:scss', 'style:fonts']);
gulp.task('styleDev', ['style:scss', 'style:fonts', 'style:watch']);

// transform ES6 & JSX
gulp.task('build:babel', () => {
  return gulp.src('src/js/**/*')
    .pipe(replaceVersion())
    .pipe($.babel())
    .pipe(gulp.dest('lib'));
});

// 由于 browserify-shim 打包 UMD 不会自动添加 CommonJS、AMD 依赖，
// 所以使用 webpack 打包。考虑将 browserify 的工作都转移到 webpack 以减少 npm 依赖数量。
gulp.task('build:pack', () => {
  return gulp.src(paths.jsEntry)
    .pipe(webpack(webpackConfig))
    .pipe(replaceVersion())
    .pipe(addBanner())
    .pipe($.rename('amazeui.touch.js'))
    .pipe(gulp.dest(paths.dist))
    .pipe($.uglify())
    .pipe(addBanner())
    .pipe($.rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', (callback) => {
  runSequence(
    'build:clean',
    ['style', 'build:babel', 'build:pack',],
    callback
  );
});

/**
 * Build Amaze UI Touch Website
 */

gulp.task('docs:clean', () => {
  return del(docsPaths.dist);
});

let bsf = (options) => {
  const babelify = ['babelify'];
  let transform = Array.isArray(options.transform) ?
    babelify.concat(options.transform) : babelify;

  return watchify(browserify({
    cache: {},
    packageCache: {},
    entries: options.entries,
    debug: !isProduction,
    transform: transform,
    // path map for fake `amazeui-touch` in `./kitchen-sink/`
    // @see https://github.com/vigetlabs/gulp-starter/issues/17
    paths: ['./kitchen-sink/'],
  }));
};

let bundler = (options) => {
  let stream = (
    options.b.bundle()
      .on('error', $.util.log.bind($.util, 'Browserify Error'))
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(replaceVersion())
      .pipe($.if(!isProduction, gulp.dest(options.dist)))
      .pipe($.size({
        title: `[${options.title}]`,
        showFiles: true,
      }))
  );

  return !isProduction ? stream : stream.pipe($.uglify())
    .pipe($.rename({suffix: '.min'}))
    .pipe(buildBanner())
    .pipe(gulp.dest(options.dist))
    .pipe($.size({
      showFiles: true,
      title: `[${options.title}] - minified`,
    }))
    .pipe($.size({
      showFiles: true,
      gzip: true,
      title: `[${options.title}] - gzipped`,
    }));
};

gulp.task('docs:js', () => {
  const docBundle = bsf({
    entries: [docsPaths.js],
    transform: [[markedify, {marked: getMarked()}], 'brfs']
  });

  const docsBundleOptions = {
    title: 'Docs',
    b: docBundle,
    dist: docsPaths.dist,
  };

  docBundle.on('update', bundler.bind(null, docsBundleOptions))
    .on('log', $.util.log);

  return bundler(docsBundleOptions);
});

gulp.task('docs:style', () => {
  let stream = gulp.src(docsPaths.style)
    .pipe($.sass({
      outputStyle: 'expanded'
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(autoprefixerOptions));

  return !isProduction ? stream.pipe(gulp.dest(docsPaths.dist)) :
    stream.pipe($.csso())
      .pipe(buildBanner())
      .pipe($.rename({suffix: '.min'}))
      .pipe(gulp.dest(docsPaths.dist));
});

gulp.task('docs:replace', () => {
  const rFrom = '__ENV__';
  const rTo = isProduction ? '.min' : '';
  const replaceEnv = function(options) {
    return gulp.src(options.src)
      .pipe($.replace(rFrom, rTo))
      // replace stat code on dev
      .pipe($.replace(/<!--STAT_CODE_START-->(.+)<!--STAT_CODE_END-->/g,
        (match, $1) => {
        return isProduction ? $1 : '';
      }))
      .pipe(gulp.dest(options.dist));
  };
  let docs = replaceEnv({
    src: `${docsDir}/index.html`,
    dist: docsPaths.dist,
  });
  let ks = replaceEnv({
    src: docsPaths.ksIndex,
    dist: docsPaths.ksDist,
  });

  return merge(docs, ks);
});

gulp.task('docs:server', () => {
  let bs = BS.create();
  bs.init({
    server: ['www'],
    open: 'external',
  });

  gulp.watch(`${docsPaths.dist}/**/*`, bs.reload);
  gulp.watch(`${docsPaths.styleDir}/*`, ['docs:style']);
});

// kitchen-sink
gulp.task('ks', () => {
  const ksBundle = bsf({
    entries: [docsPaths.ksEntry],
  });
  const ksOptions = {
    title: 'kitchen-sink',
    b: ksBundle,
    dist: docsPaths.ksDist,
  };

  ksBundle.on('update', bundler.bind(null, ksOptions))
    .on('log', $.util.log);

  return bundler(ksOptions);
});

gulp.task('docs', (callback) => {
  runSequence('docs:clean',
    ['styleDev', 'docs:style', 'docs:js', 'docs:replace', 'ks'],
    'docs:server',
    callback);
});

gulp.task('default', ['docs']);
