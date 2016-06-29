# OffCanvas

OffCanvas 组件，侧边栏组件。

## 组件

### OffCanvas

`<OffCanvas>` 组件，放置侧边栏内容。

#### Props

`<OffCanvas>` 属性通过触发器 `<OffCanvasTrigger>` 传递，暂无需要设置的属性。

### OffCanvasTrigger

`<OffCanvasTrigger>` 组件，侧边栏触发器。

##### `offCanvas`

> PropType: `node`

要触发的侧边栏，`OffCanvas` 组件实例，**必需**。

##### `placement`

> PropType: `enum('left', 'right')`

侧边栏位置，默认为 `left`。

##### `animation`

> PropType: `enum('slide', 'push')`

动画效果，默认为 `slide`。

##### `pageContainer`

> PropType: `node`

使用 `push` 动画效果时，侧边栏「推」的容器（一般为 SPA 的容器），可以传递容器 `id` 或者 容器 React 组件实例。

##### `onOpen`

> PropType: `func`

侧边栏打开时的回调函数。

##### `onClosed`

> PropType: `func`

侧边栏关闭以后的回调函数。


#### 方法

调用方式见示例代码。

##### `.open()`

打开侧边栏。

##### `.close()`

关闭侧边栏。


## 示例
