# Slider

轮播组件。

## 组件

### Slider

`<Slider>` 组件，轮播容器。

#### Props

##### `controls`

> PropType: `bool`

是否显示「上、下翻页」按钮，默认为 `true`。

##### `pager`

> PropType: `bool`

是否显示「分页圆点」按钮，默认为 `true`。

##### `interval`

> PropType: `number`

轮播间隔时间，默认为 `5000`（ms）。

##### `autoPlay`

> PropType: `bool`

是否自动播放，默认为 `true`。

##### `loop`

> PropType: `bool`

是否循环播放，默认为 `true`。

##### `defaultActiveIndex`

> PropType: `number`

默认激活的幻灯片编号。

##### `onAction`

> PropType: `func`

幻灯片切换后的回调函数，接受两个参数 `(index, direction)`，`index` 为幻灯片编号，`direction` 为滚动方向。


### Slider.Item

`<Slider.Item>` 组件，轮播子项。

#### Props

##### `caption`

> PropType: `node`

幻灯片标题。

##### `thumbnail`

> PropType: `string`

幻灯片缩略图 URL，设置 `thumbnail` 以后，分页圆点将替换为缩略图。


## 示例
