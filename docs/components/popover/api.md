# Popover

 Popover 用于气泡式的弹出框。

## 组件

### Popover

`<Popover>` 组件，气泡内容。

#### Props

##### `placement`

> PropType: `enum('top', 'bottom', 'horizontal')`

Popover 位置。

##### `onDismiss`

> PropType: `func`

关闭 Popover 调用的函数。


### PopoverTrigger

`<PopoverTrigger>` Popover 组件触发器。

#### Props

##### `popover`

要控制的 Popover 实例，**必需**。

##### `onOpen`

> PropType: `func`

Popover 打开时的回掉函数。

##### `onClosed`

> PropType: `func`

Popover 关闭以后的回掉函数。


#### 方法

##### `.open()`

打开 Popover。

##### `.close()`

关闭 Popover。


## 示例
