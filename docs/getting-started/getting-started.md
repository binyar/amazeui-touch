# 开始使用

## 准备工作

### 开发环境配置

- 下载安装 [Node.js](https://nodejs.org/en/download/)（推荐使用 `4.x` LTS 最新正式版）
- 一些 npm 模块编译需要环境支持，Windows 用户会麻烦一些，具体配置说明参见：
  - [https://github.com/nodejs/node-gyp#installation]()
  - [Setting up Node.js on Windows 10](https://blog.risingstack.com/node-js-windows-10-tutorial/)

### 预备知识

现在开源社区的前端资源数不胜数，但不意味着一个对 HTML、CSS、JavaScript 一无所知或知之甚少的人能有效、高效地利用这些资源达成目标。对于初学者，个人并不建议刚入门就使用框架（库），只知其然时就扎进去，不如夯实基础，到知其所以然以后再开始使用，这样对个人提高更有裨益。请记住，库（框架）不是模板，能为开发节省时间，但不能代替基础知识学习。

使用 Amaze UI Touch 之前，除了熟悉 HTML、CSS、JavaScript 以外，还应了解相关的工具和项目。

**相关项目**：

- [React 官网](http://facebook.github.io/react/)（v0.14.0+）
- [React Router](https://github.com/rackt/react-router/)（可选）
- [Sass](http://sass-lang.com/)：Amaze UI Touch 样式使用 Sass 编写，如需深入二次开发，应当知道如何使用 Sass。

**构建工具：**

传统的开发方式仍然可用，但如果想提高开发效率、使用新技术，一些工具必不可少。

- [Babel](https://babeljs.io/)
- [Gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- Browserify / [Webpack](http://webpack.github.io/)
- [Grunt](http://gruntjs.com/)（廉颇老矣，尚能饭否？）

## 兼容性

### CSS

- [Flexbox](http://caniuse.com/#feat=flexbox)

  Amaze UI Touch 完全基于 flexbox 布局。由于[旧版规范](http://www.w3.org/TR/2009/WD-css3-flexbox-20090723/)中没有 `flex-shrink`、`flex-basis`、`flex-wrap` 对应的属性，导致只支持旧版规范的浏览器无法正常渲染布局,暂时[~~没有找到解决方法（望赐教）~~](https://github.com/amazeui/amazeui-touch/issues/12) 通过回退方式处理，在 Android UC 上测试通过，有待进行更多测试 :( 。
- [CSS3 Transitions](http://caniuse.com/#feat=css-transitions)
- [CSS Animation](http://caniuse.com/#feat=css-animation)

### JavaScript

- ES5: Amaze UI Touch 基于 ES2015 编写，使用 Babel.js 转换为 ES5；
- React.js: ~~0.1.x 兼容至 IE8~~ `15.x` 兼容至 IE9。

## 编写页面

如果你是新手，建议使用 [**Amaze UI Touch Starter Kit**](https://github.com/amazeui/amt-starter-kit)。

如果你有 React、npm 使用经验，则可以按熟悉的套路来。

### 安装 Amaze UI Touch

```bash
npm install --save-dev amazeui-touch
```

### Hello World

### HTML

**CSS 文件**

打包的 CSS 文件 `amazeui.touch.css`、`amazeui.touch.min.css` 位于 `node_modules/amazeui-touch/dist` 下，可以通过以下两种方式引入：

- 直接使用 `<link>` 标签在 HTML 中引入；
- 如果使用支持 CSS 打包的构建工具（如 Webpack），可以直接在入口 JS 中 `import` 样式：

  ```javascript
  import 'amazeui-touch/dist/amazeui.touch.min.css';
  ```

```html
<!DOCTYPE html>
<html>
<head lang="zh-cn">
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Amaze UI Touch</title>
  <meta name="renderer" content="webkit">
  <!-- No Baidu Siteapp-->
  <meta http-equiv="Cache-Control" content="no-siteapp">
  <link rel="alternate icon" type="image/png" href="i/favicon.png">
  <link rel="apple-touch-icon-precomposed" href="i/app-icon72x72@2x.png">
  <meta name="apple-mobile-web-app-title" content="AMUI React">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="stylesheet" href="path/to/amazeui.touch.min.css">
</head>
<body>
  <div id="root">
  </div>
  <!-- app.js 为上面的代码编译打包后的文件 -->
  <script src="app.js"></script>
</body>
</html>
```

#### JavaScript:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
} from 'amazeui-touch';

ReactDOM.render(<Button>Hello World</Button>, document.getElementById('root'));
```

**全局方式引用**

如果基于使用公共 CDN 或者维护方便等原因考虑，不想把 Amaze UI Touch 打包到项目文件中，可以以全局方式引用，即在 HTML 中引入 `amazeui.touch.min.js` 文件，然后以 **`AMUITouch`** 这个全局变量访问组件。

如果使用 Webpack 构建，则可以在配置文件中做设置，比如下面的配置中，React 和 Amaze UI Touch 将以全局的方式调用，不会打包到你的项目中（即需要单独引入）。

```javascript
// ...
externals: {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'amazeui-touch': 'AMUITouch',
}
// ...
```

需要注意的是，Amaze UI Touch 使用了 React CSS Transition Group add-on，引入 React 时需使用包含 add-ons 的版本 `react-with-addons.min.js`。

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-with-addons.min.js"></script>
```

### 进阶使用

进阶使用可参见 kitchen-sink 源码。

[debug]: http://www.zhihu.com/question/37361845
