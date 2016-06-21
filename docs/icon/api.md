# Icon

图标组件，目前使用 [Ratchet](https://github.com/twbs/ratchet/tree/master/fonts) 的字体图标，包含 40 个常用图标。

## 组件

### Icon

`<Icon>` 组件。

#### Props

##### `component`

> PropType: `node`

组件使用的元素，默认为 `span`。

##### `name`

> PropType: `enum('back', 'bars', 'caret', 'check', 'close', 'code', 'compose', 'download', 'edit', 'forward', 'gear', 'home', 'info', 'list', 'more-vertical', 'more', 'pages', 'pause', 'person', 'play', 'plus', 'refresh', 'search', 'share', 'sound', 'sound2', 'sound3', 'sound4', 'star-filled', 'star', 'stop', 'trash', 'up-nav', 'up', 'right-nav', 'right', 'down-nav', 'down', 'left-nav', 'left')`

图标名称。


##### `href`

> PropType: `string`

如果设置 `href` 属性将忽略 `component` 属性，渲染为 `<a>`。

## 图标字体定制

如果内置的图标不能满足需求，可以通过 [IconMoon](https://icomoon.io/app/#/select) 或 [阿里巴巴矢量图标库](http://iconfont.cn/) 等工具生成图标字体，替换内置图标。

流程如下：

1. 通过上述或其他工具生成图标字体文件；
2. 获取 Amaze UI Touch 源码，修改 Sass 变量，重新编译 CSS。

  为方便管理，AMT 提供了一个专门供用户定义变量的文件 `src/scss/_user.scss`。添加下面两个变量，覆盖内置图标样式。

  ```sass
    $icon-fonts: (
      // font-family 中使用的字体名称
      icomoon: (
        weight: normal,
        style: normal,
        // 自定义字体的路径
        src: unquote(
            'url("icomoon.woff") format("woff"),
            url("icomoon.ttf") format("truetype"),
            url("icomoon.svg#icomoon") format("svg");'
        )
      ),
      // 可以按照上面的格式继续添加其他字体
    );

    // 图标名称和 Unicode 编码映射
    // 注意：图标名称不能重名
    $icons: (
      back: \e80a,
      bars: \e80e,
    );
  ```

  修改变量完成以后，执行 `npm run build` 编译，定制的 CSS 文件位于 `dist` 目录下。

## 示例
