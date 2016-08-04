import React from 'react';
import ReactDOM from 'react-dom';

import {
  Container,
  NavBar,
  Group,
} from 'amazeui-touch';

const About = React.createClass({
  getDefaultProps() {
    return {
      year: new Date().getFullYear(),
    };
  },

  render() {
    const {
      year,
      ...props
    } = this.props;

    return (
      <Container {...props}>
        <Group
          header="关于 Amaze UI Touch"
          footer={`ver ${__VERSION__}`}
        >
          <p>Amaze UI Touch 是基于 React.js 的移动端 Web 组件库。</p>
        </Group>
        <Group
          header="开发人员"
        >
          <ul>
            <li><a href="https://github.com/minwe" target="_blank">@minwe</a>
            </li>
            <li><a href="https://github.com/huangzhipeng" target="_blank">@huangzhipeng</a>
            </li>
          </ul>
        </Group>
        <Group
          header="鸣谢"
        >
          <p>感谢所有参与、关注 Amaze UI 的用户。</p>
        </Group>
        <Group
          header="版权"
        >
          <p>MIT © 2015 - {year} AllMobilize Inc.</p>
        </Group>
        <Group
          header="UA"
        >
          <p><code>{navigator.userAgent}</code></p>
        </Group>
      </Container>
    )
  }
});

export default About;
