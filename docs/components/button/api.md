# Button

按钮相关组件。

## 组件

### Button

`<Button>` 按钮组件。

#### Props

##### `component`

> PropType: `node`

组件使用的元素，默认为 `button`。


##### `href`

> PropType: `string`

如果设置 `href`，则渲染为 `<a>`。


##### `target`

> PropType: `string`

设置为 `href` 以后可以设置链接打开方式。


##### `amStyle`

> PropType: `string`

颜色样式。可选值：

- `'primary'`
- `'secondary'`
- `'success'`
- `'warning'`
- `'alert'`
- `'dark'`


##### `amSize`

> PropType: `string`

按钮尺寸。可选值：

- `'xs'`
- `'sm'`
- `'lg'`
- `'xl'`

不设置则显示默认尺寸。

##### `hollow`

> PropType: `bool`

是否应用「镂空」样式。


##### `block`

> PropType: `bool`

是否应用块级样式。


##### `active`

> PropType: `bool`

是否应用「激活」样式。


##### `disabled`

> PropType: `bool`

是否应用「禁止」样式。

---

### ButtonGroup

`<ButtonGroup>` 按钮组组件，用于放置 `<Button>`。

#### Props

##### `amStyle`

> PropType: `string`

颜色样式。可选值：

- `'primary'`
- `'secondary'`
- `'success'`
- `'warning'`
- `'alert'`
- `'dark'`

该属性会传递到子 `<Button>` 组件上，子 `<Button>` 组件不用再设置。

##### `amSize`

> PropType: `string`

按钮尺寸。可选值：

- `'xs'`
- `'sm'`
- `'lg'`
- `'xl'`

不设置则显示默认尺寸。

该属性会传递到子 `<Button>` 组件上，子 `<Button>` 组件不用再设置。

##### `hollow`

> PropType: `bool`

是否应用「镂空」样式。

该属性会传递到子 `<Button>` 组件上，子 `<Button>` 组件不用再设置。


##### `justify`

> PropType: `bool`

按钮组宽度是否适应容器宽度。


##### `stacked`

> PropType: `bool`

按钮是否垂直堆叠排列。

---

### ButtonToolbar

`<ButtonToolbar>` 组件用于放置 `<Button>`，创建按钮工具拦效果。


## 示例
