# Accordion

手风琴效果的折叠内容组件。

## 组件

### Accordion

`<Accordion>` 组件的容器，用于包裹 `<Accordion.Item>`。

#### Props

##### `activeKey`

> PropType: `any`

激活的面板的 `key`。

##### `defaultActiveKey`

> PropType: `any`

默认激活的面板的 `key`，与 `<Accordion.Item>` 的 `eventKey` 相同时，该项目激活（展开）。

##### `inset`

> PropType: `bool`

是否添加边距。默认为全宽填满容器，设置 `inset` 属性以后添加 `15px` 的边距。

### Accordion.Item

`<Accordion.Item>` 手风琴子项。

#### Props

##### `title`

> PropType: `node`

子项的标题。

##### `eventKey`

> PropType: `any`

子项的事件标识符，当父级 `<Accordion>` 的 `defaultActiveKey` 与当前 `eventKey` 相等时，该项激活。

## 示例
