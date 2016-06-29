# Group

分组组件，用于分隔不同的内容块。

## 组件

### Group

`<Group>` 组件。

#### Props

##### `component`

> PropType: `node`

分组容器元素，默认为 `div`。

##### `header`

> PropType: `node`

分组标题。

##### `footer`

> PropType: `node`

分组脚注。

##### `noPadded`

> PropType: `bool`

是否移除分组内容的 `padding`。

## 示例

```javascript
import React from 'react';
import {
  Group,
} from 'amazeui-touch';

const GroupExample = React.createClass({
  render() {
    return (
      <div>
        <Group
          header="默认"
          noPadded
        >
          {sliderIntance}
        </Group>

        <Group
          header="缩略图"
          noPadded
        >
          {sliderThumbs}
        </Group>

        <Group
          header="标题"
          noPadded
        >
          {sliderCaption}
        </Group>
      </Container>
    );
  }
});

export default GroupExample;
```
