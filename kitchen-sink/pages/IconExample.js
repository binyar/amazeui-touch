import React from 'react';
import {
  Container,
  Grid,
  Col,
  Icon,
  Group,
} from 'amazeui-touch';

const icons = ['back', 'bars', 'caret', 'check', 'close', 'code', 'compose', 'download', 'edit', 'forward', 'gear', 'home', 'info', 'list', 'more-vertical', 'more', 'pages', 'pause', 'person', 'play', 'plus', 'refresh', 'search', 'share', 'sound', 'sound2', 'sound3', 'sound4', 'star-filled', 'star', 'stop', 'trash', 'up-nav', 'up', 'right-nav', 'right', 'down-nav', 'down', 'left-nav', 'left'];

const IconExample = React.createClass({
  render() {
    return (
      <Container {...this.props}>
        <p className="padding">
          下面的宫格基于 Grid 组件实现，具体代码参见 Icon 文档。
        </p>
        <Grid avg={4} bordered className="sk-icons text-center">
          {
            icons.map((icon, i) => {
              return (
                <Col key={i}>
                  <Icon name={icon} key={i}></Icon>
                  <div className="sk-icon-name text-truncate">
                    {icon}
                  </div>
                </Col>
              );
            })
          }
        </Grid>
        <br />
        <br />
      </Container>
    );
  }
});

export default IconExample;
