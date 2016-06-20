# Container

容器组件，用于创建 `100%` 高度的容器。

容器组件用于实现仿原生的场景切换效果，**如不追求动效，或者一时无法理解其工作原理，可不使用**。

## 组件

### Container

`<Container>` 组件，基于 [react-container](https://github.com/JedWatson/react-container) 修改（[在线演示](http://jedwatson.github.io/react-container/) | [演示源代码](https://github.com/JedWatson/react-container/tree/master/example/src)）。

#### Props

##### `component`

> PropType: `node`

容器元素，默认为 `div`。

##### `fill`

> PropType: `bool`

是否填充父容器可用高度（应用 `height: 100%`）样式。


##### `direction`

> PropType: `enum('column', 'row')`

Flex box 方向，设置该属性后，容器会应用 `display: flex` 样式。

##### `scrollable`

> PropType: `bool`

内容超出容器时是否显示滚动条。

##### `transition`

> PropType: `string`

转场动画名称，**如不设置则没有转场动画**。

内置的动画效果包括：

- `sfl`: show from left
- `sfr`: show from right
- `rfl`: reveal from left
- `rfr`: reveal from left

**动画编写说明：**

设置该属性以后，将返回一个 [ReactCSSTransitionGroup](https://facebook.github.io/react/docs/animation.html#high-level-api-reactcsstransitiongroup) 组件：

```javascript
if (transition) {
  return (
    <CSSTransitionGroup
      component="div"
      className={classNames(this.setClassNS('views'), className)}
      transitionName={this.setClassNS(`view-transition-${transition}`)}
      transitionEnterTimeout={TRANSITION_TIMEOUT}
      transitionLeaveTimeout={TRANSITION_TIMEOUT}
      {...props}
    >
      {children}
    </CSSTransitionGroup>
  );
}
```

其中 `transitionName` 属性的值为 `view-transition-${transition}` 再加上命名空间（默认为空），所以，在编写自定义动画时，对应的样式为：

```css
/* 以编写名为 `fade` 的动画为例 */
.view-transition-fade-enter {
  opacity: 0.01;
}

.view-transition-fade-enter.view-transition-fade-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.view-transition-fade-leave {
  opacity: 1;
}

.view-transition-fade-leave.view-transition-fade-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
```

### View

`<View>` 组件，绝对定位的容器，用于实现转场动画，具体使用参见 kitchen-sink。
