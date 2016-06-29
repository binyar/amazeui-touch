# Notification

通知组件，用于显示通知信息。

## 组件

### Notification

`<Notification>` 组件。

#### Props

##### `title`

> PropType: `node`

通知标题，如无特殊需求，一般无须设置。

##### `amStyle`

> PropType: `string`

通知样式，默认为黑色。可选值：

- `'primary'`
- `'secondary'`
- `'success'`
- `'warning'`
- `'alert'`

##### `closeBtn`

> PropType: `bool`

是否显示关闭按钮，默认为 `true`。

##### `animated`

> PropType: `bool`

打开、关闭是否显示动画效果。

##### `visible`

> PropType: `bool`

通知栏是否可见，使用时 `visible` 为 `true` 打开通知，否则关闭。

##### `static`

> PropType: `bool`

是否渲染为静态的通知栏。

##### `onDismiss`

> PropType: `func`

点击「关闭」按钮时的处理函数。


## 示例
