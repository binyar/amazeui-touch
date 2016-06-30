# 进阶使用

## 模块化引用

从 `1.0.0-rc.1` 开始，Amaze UI Touch（下称 AMT） 将样式依赖添加到了 JS 文件中（[fcb3538](https://github.com/amazeui/amazeui-touch/commit/648fd17099a794cc62d0fc6be0029673a286fb9c)），以便进行按需打包等更精细化的管理、使用。

```javascript
// Accordion.js
// ...  		  
import '../scss/components/_accordion.scss';
// ...
```

这意味着在使用 AMT 的时候，可以只引用需要的组件并打包组件对应的样式，无需引入完整的 CSS 文件。

具体使用流程如下：

### 步骤 1：从源文件中引入模块

```javascript
// 注意是从源文件中引入
import Accordion from 'amazeui-touch/js/Accordion';

// 使用 Accordion 组件
```

**注意**：这里引入的是包含 JSX 和 ES2015 代码的源文件，构建的时候需要经过 Babel 处理。

```javascript
// webpack config file
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      loaders: [
        'babel',
      ],
      include: [
        path.join(__dirname, 'app/js'),
        // 注意包含 AMT 源文件目录
        path.resolve(__dirname, 'node_modules/amazeui-touch/js'),
      ]
    },
  ]
}
// ...
```

### 步骤 2：处理样式

虽然组件的样式自动引用了，但是由于 CSS 并非原生 JavaScript 模块，构建工具在处理 CSS 模块时缺乏去重机制，因此 AMT 并没有在组件样式中引入基础公共样式（如 nomalize、基础设置样式），以免独立引用多个模块时造成样式重复。

> 构建工具先将每个模块的 CSS 依赖编译后以文本的形式引入，而不是提取所有 CSS 模块路径，再统一进行编译，所以 Sass/Less 的一些去重机制并不能发挥作用，[参考链接 1](https://github.com/webpack/less-loader/issues/7)、[参考链接 2](https://github.com/jtangelder/sass-loader/issues/145)。

所以，模块化使用 AMT 时，需要在入口文件中**引入一次（只需一次）** AMT 基础样式。

```javascript
// entry.js
import 'amazeui-touch/scss/base';
```

当然，也可以在自己的样式文件中引入。

```sass
// app/style.scss
@import "../node_modules/amazeui-touch/scss/base";

// typography 和 utilities 没有对应的 JS 组件，如果用到了也要单独引入
// @import "../node_modules/amazeui-touch/scss/components/typography";
// @import "../node_modules/amazeui-touch/scss/components/utilities";
```

CSS 相关 loader 可参考 [Starter Kit](https://github.com/amazeui/amt-starter-kit)。

### 小结

通过以上方式，项目只包含使用到的组件及相应的 CSS，解决了对文件大小比较敏感的用户的后顾之忧。
