# TabBar

页面底部工具栏组件。


## 组件

### TabBar

`<TabBar>` 组件，工具栏容器。

#### Props

##### `component`

> PropType: `node`

工具栏容器元素，默认为 `nav`。

##### `amStyle`

> PropType: `string`

工具栏颜色样式，可选值：

- `'primary'`
- `'secondary'`
- `'success'`
- `'warning'`
- `'alert'`
- `'dark'`

##### `onAction`

> PropType: `func`

点击工具栏子项时的处理函数。


### TabBar.Item

`<TabBar.Item>` 组件，工具栏子项。

#### Props

##### `component`

> PropType: `node`

工具栏容器元素，默认为 `span`。

##### `icon`

> PropType: `string`

图标名称，可选值参见 `Icon` 文档。

##### `title`

> PropType: `string`

子项标题。

##### `href`

> PropType: `string`

子项链接，设置 `href` 属性以后，子项会渲染为 `<a>` 元素。

##### `eventKey`

> PropType: `any`

事件处理标识符。

##### `badge`

> PropType: `string, number`

子项小徽章上显示的文字。

**注意**：目前只有设置了 `icon`， 再设置 `badge` 才有效。

##### `badgeStyle`

> PropType: `string`

小徽章颜色样式，默认为 `alert`。

##### `selected`

> PropType: `bool`

子项是否被选中。


## 示例
