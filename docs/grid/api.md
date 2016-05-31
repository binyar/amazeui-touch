# Grid

网格组件，Amaze UI Touch 默认提供了 **`6`** 列的网格系统。

## 组件

### Grid

`<Grid>` 组件，网格容器，行。

#### Props

##### `collapse`

> PropType: `bool`

是否移除列默认的内边距（`padding`）。

##### `wrap`

> PropType: `enum('wrap', 'wrap-reverse')`

网格容器 `flex-wrap` 属性，是否换行，默认为 `nowrap`。

##### `avg`

> PropType: `number`

平均分配单元格为 n 列。

##### `align`

> PropType: `enum('right', 'center', 'between', 'around')`

行中列宽度总和不足 6 时的对齐方式，不同值的含义参见 [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)。


### Col

`<Col>` 组件，网格中列，嵌套在 `<Grid>` 中。

#### Props

##### `cols`

> PropType: `number`

列宽所占的比例，`1-6` 的数字。

##### `offset`

> PropType: `number`

列偏移（与左边元素的外边距）的数量。

##### `shrink`

> PropType: `bool`

列是否自动收缩为内容宽度。

## 示例
