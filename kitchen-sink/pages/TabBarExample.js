import React from 'react';
import {
  Container,
  Group,
  TabBar,
  Icon,
  Badge,
  amStyles,
} from 'amazeui-touch';

const TabBarDemo = React.createClass({
  getInitialState() {
    return {
      selected: 'home'
    };
  },

  handleClick(key, e) {
    e.preventDefault();

    this.setState({
      selected: key
    }, function() {
      console.log('选中了： %s', this.state.selected);
    });
  },

  render() {
    return (
      <TabBar
        amStyle="primary"
        onAction={this.handleClick}
      >
        <TabBar.Item
          eventKey="home"
          selected={this.state.selected === 'home'}
          icon="home"
          title="首页"
        />
        <TabBar.Item
          selected={this.state.selected === 'gear'}
          eventKey="gear"
          icon="gear"
          title="设置"
        />
        <TabBar.Item
          selected={this.state.selected === 'info'}
          eventKey="info"
          icon="info"
          badge={5}
          title="信息"
        />
      </TabBar>
    )
  }
});

const TabBarExample = React.createClass({
  renderStyles(amStyle, index) {
    return (
      <Group
        header={amStyle}
        noPadded
        key={index}
      >
        <TabBar amStyle={amStyle.toLowerCase()}>
          <TabBar.Item selected icon="home" title="首页" />
          <TabBar.Item icon="gear" title="设置" />
          <TabBar.Item icon="info" badge={5} title="信息" />
        </TabBar>
      </Group>
    )
  },

  render() {
    return (
      <Container {...this.props}>
        <Group
          header="文字"
          noPadded
        >
          <TabBar>
            <TabBar.Item selected title="首页" />
            <TabBar.Item title="设置" />
            <TabBar.Item title="关于" />
          </TabBar>
        </Group>

        <Group
          header="图标"
          noPadded
        >
          <TabBar>
            <TabBar.Item selected icon="home" />
            <TabBar.Item icon="gear" />
            <TabBar.Item icon="info" />
          </TabBar>
        </Group>

        <Group
          header="图标 + Badge"
          noPadded
        >
          <TabBar>
            <TabBar.Item selected icon="home" />
            <TabBar.Item icon="gear" />
            <TabBar.Item icon="info" badge={5} />
          </TabBar>
        </Group>

        <Group
          header="图标 + 文字"
          noPadded
        >
          <TabBar>
            <TabBar.Item selected icon="home" title="首页" />
            <TabBar.Item icon="gear" title="设置" />
            <TabBar.Item icon="info" badge={5} title="信息" />
          </TabBar>
        </Group>

        {amStyles.map(this.renderStyles)}

        <Group
          header="交互"
          noPadded
        >
          <TabBarDemo />
        </Group>
      </Container>
    );
  }
});
// test
export default TabBarExample;
