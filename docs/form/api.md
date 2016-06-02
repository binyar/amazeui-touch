# Form

表单相关组件。

## 组件

### Field

`<Field>` 组件，用于生成 `<input>` 元素。

#### Props

##### `type`

> PropType: `string`

输入框类型，可选值为：

- HTML `input` 元素的 [`type` 属性的值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)
- `'select'`
- `'textarea'`

##### 默认值：`defaultValue` / `defaultChecked`

`<Field>` 组件默认值设置遵循 React 对 `<input>`、`textarea` 等[表单组件的处理方式](http://facebook.github.io/react/docs/forms.html)。

- `defaultValue`: 适用于 `type` 为 `text`、`textarea` 等可输入类型及 `select` 的 `<Field>` 组件。

  当 `type` 为 `select` 时：
  - 若为**多选**（设置了 `multiple` 属性），则默认值应该传递一个数组；

    ```jsx
    <Field
      type="select"
      label="Multiple Select"
      multiple
      defaultValue={['x', 'y']}
    >
    {/*...*/}
    </Field>
    ```
  - 若为**单选**，则传递字符串。

    ```jsx
    <Field
      type="select"
      label="Single Select"
      defaultValue="x"
    >
    {/*...*/}
    </Field>
    ```

  `getValue()` 的返回值类型也遵循上面的规则。
- `defaultChecked`: 适用于 `type` 属性为 `radio`、`checkbox` 的 `<Field>` 组件。

##### `label`

> PropType: `node`

输入框标签。


##### `btnBefore`

> PropType: `node`

组建输入框组时输入框**前面**的按钮。


##### `btnAfter`

> PropType: `node`

组建输入框组时输入框**后面**的按钮。


##### `labelBefore`

> PropType: `node`

组建输入框组时输入框**前面**的文字。


##### `labelAfter`

> PropType: `node`

组建输入框组时输入框**后面**的文字。


#### 方法

##### `.getValue()`

返回输入框的值。

##### `.getChecked()`

返回输入框是否选中，当 `type` 为 `radio` 或 `checkbox` 时有效。


##### `.getSelectedOptions()`

返回 `<select>` 的值，`type` 为 `'select'` 时有效。

---

### Switch

`<Switch>` 组件，开关按钮。

#### Props

##### `name`

> PropType: `string`

`name` 属性应用到内部的 `input` 元素上，可用于传统的表单提交。

##### `value`

> PropType: `bool`

`value` 值应用到内部 `input` 元素的 `defaultChecked` 属性上，设置是否选中（[*uncontrolled*](http://facebook.github.io/react/docs/forms.html#uncontrolled-components)）。

##### `disabled`

> PropType: `bool`

是否禁用 Switch。

##### `onValueChange`

> PropType: `func`

Switch 值发生变化时处理函数。

#### Ref

##### `field`

指向 Switch 内部的 `input` 元素，可用于获取 Switch 状态。

```javascript
function handleSwitch() {
  console.log(this.refs.field.checked);
}

const mySwitch = <Switch onValueChange={handleSwitch} />;
```

#### 方法

##### `.getValue()`

获取状态，同使用 `ref` 一样，选中时返回 `true`，否则返回 `false`。

```javascript
function handleSwitch() {
  console.log(this.getValue());
}

const mySwitch = <Switch onValueChange={handleSwitch} />;
```

## 示例
