# List

列表组件。

## 组件

### List

`<List>` 组件，列表容器。

#### Props

<!--
##### `component`

> PropType: `node`

组件使用的元素，默认为 `ul`。-->


##### `inset`

> PropType: `bool`

是否添加列表边距。

---

### List.Item

`<List.Item>` 组件，列表子项。

#### Props

##### `role`

> PropType: `enum('header', 'item')`

子项角色，默认为 `item`。

##### `title`

> PropType: `string`

列表主标题。

##### `subTitle`

> PropType: `string`

列表副标题。

##### `href`

> PropType: `string`

列表链接。

##### `linkComponent`

> PropType: `any`

链接组件，在一些场合可以传入如 react-router `<Link>` 之类的组件。

##### `linkProps`

> PropType: `object`

传递到 `linkComponent` 上的属性。

##### `media`

> PropType: `node`

列表图片。

```javascript
const img = <img width="32" src="http://lorempixel.com/128/128/people/" />;

const listInstance = (
  <List.Item
    media={img}
    title="包含图片列表项"
    href="#"
  />
);
```

##### `after`

> PropType: `node`

列表标题后面的附加信息，如日期、小徽章等。


```javascript
const badge1 = <Badge rounded amStyle="alert">5</Badge>;

const listInstance = (
  <List.Item
    after={badge1}
    title="包含徽章的列表项"
    href="#"
  />
);
```

##### `desc`

> PropType: `node`

列表项摘要、描述信息。


##### `nested`

> PropType: `enum('input', 'radio', 'checkbox')`

如果列表项中嵌套了以上三种表单类型之一，需要设置改属性。


## 示例
