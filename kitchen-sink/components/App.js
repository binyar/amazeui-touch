import React from 'react';
import {
  Link,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';

const App = React.createClass({
  render() {
    let {
      location,
      params,
      children,
    } = this.props;
    let transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">
        <Container
          transition={transition}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar
          amStyle="primary"
        >
          <TabBar.Item
            component={Link}
            icon="list"
            title="组件"
            selected={!params.component}
            to="/"
          />
          <TabBar.Item
            component={Link}
            icon="info"
            title="关于"
            badge='β'
            selected={params.component === 'about'}
            to="/about"
          />
        </TabBar>
      </Container>
    );
  }
});

export default App;
