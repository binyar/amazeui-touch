import React from 'react';
import ReactDOM from 'react-dom';
import {
  Link,
} from 'react-router';

import {
  Container,
  List,
  NavBar,
  Group,
  View,
} from 'amazeui-touch';

let pages = [
  'Accordion',
  'Badge',
  'Button',
  'Card',
  'Form',
  'Grid',
  'Icon',
  'List',
  'Loader',
  'Modal',
  'NavBar',
  'Notification',
  'OffCanvas',
  'Popover',
  'Slider',
  'TabBar',
  'Tabs',
  'Typography',
  'Datetime',
  'Address'
];

const Default = React.createClass({
  getDefaultProps() {
    return {
      transition: 'rfr'
    };
  },

  render() {
    let items = pages.map((item, i) => {
      return (
        <List.Item
          linkComponent={Link}
          linkProps={{to: `/${item.toLowerCase()}`}}
          title={item}
          key={i}
        />
      );
    });

    return (
      <View id="app-index">
        <NavBar
          amStyle="primary"
          title="Amaze UI Touch"
        />
        <Container scrollable>
          <Group
            header="Amaze UI Touch Components"
            noPadded
          >
            <List>
              {items}
            </List>
          </Group>
        </Container>
      </View>
    )
  }
});

export default Default;
