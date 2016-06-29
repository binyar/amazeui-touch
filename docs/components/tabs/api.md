# Tabs

选项卡组件。

## 组件

### Tabs

`<Tabs>` 组件，选项卡容器。

#### Props

##### `defaultActiveKey`

> PropType: `any`

激活选项卡的 `eventKey`。

##### `onAction`

> PropType: `func`

点击选项卡时的回调函数。



### Tabs.Item

`<Tabs.Item>` 组件，选项卡子项。


#### Props

##### `title`

> PropType: `node`

选项卡标题。

##### `eventKey`

> PropType: `any`

事件处理标识符。

##### `disabled`

> PropType: `bool`

是否禁用该选项卡。

##### `noPadded`

> PropType: `bool`

是否移除选项卡面板的内边距（`padding`）。

##### `navStyle`

> PropType: `string`

选项卡标题颜色样式，可选值见 `Button` 颜色样式。

## 示例
