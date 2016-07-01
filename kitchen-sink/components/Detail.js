import React from 'react';
import {
  Link,
} from 'react-router';

import {
  NavBar,
  View,
} from 'amazeui-touch';

import * as Pages from '../pages';
import NotFound from './NotFound';

let {
  Default,
  ...Components
} = Pages;

const Detail = React.createClass({
  render() {
    let component = this.props.params.component;

    if (component) {
      component = component.charAt(0).toUpperCase() + component.slice(1);
    }

    let Component = Components[component] || NotFound;
    let backNav = {
      component: Link,
      icon: 'left-nav',
      title: '返回',
      to: '/',
    };

    return (
      <View
        id="sk-detail"
      >
        <NavBar
          title={component}
          leftNav={[backNav]}
          amStyle="primary"
        />
        <Component scrollable className="sk-demos" />
      </View>
    );
  }
});

export {Default, Detail};
