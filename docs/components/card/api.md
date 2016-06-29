# Card

卡片式内容功能组件。

## 组件

### Card

`<Card>` 组件，卡片容器。

#### Props

##### `title`

> PropType: `string`

卡片标题。


##### `header`

> PropType: `node`

卡片头部。

##### `footer`

> PropType: `node`

卡片页脚。

卡片 `<Card>` 的 `header` 和 `footer` 可用 `<Card.Child>` 组装（见示例代码），也可自行组织。

---

### Card.Child

`<Card.Child>` 用于组织 `<Card>` 的 `header` 和 `footer`。

#### Props

##### `role`

> PropType: `enum('header', 'footer')`

充当的角色，默认为 `header`。


##### `cover`

> PropType: `string`

卡片封面图片 URL，仅在 `role` 为 `header` 时有效。


## 示例
