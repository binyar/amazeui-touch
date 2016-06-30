import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import Icon from './Icon';
import Badge from './Badge';

import '../scss/components/_tabbar.scss';

// TODO: 默认的选中处理
let TabBar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    component: React.PropTypes.node,
    amStyle: React.PropTypes.string,
    onAction: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      classPrefix: 'tabbar',
      component: 'nav',
      onAction: () => {}
    };
  },

  render() {
    let classSet = this.getClassSet();
    let {
      component: Component,
      className,
      children,
      onAction,
      ...props
    } = this.props;

    return (
      <Component
        {...props}
        className={classNames(classSet, className)}
      >
        {React.Children.map(children, (child, index) => {
          let {
            eventKey,
            onClick,
            ...props
          } = child.props;
          let clickHandler = onClick || onAction;
          let key = eventKey || index;
          eventKey = eventKey || key;

          return (
            <TabBar.Item
              {...props}
              onClick={clickHandler.bind(null, eventKey)}
              key={key}
              eventKey={eventKey}
            />
          );
        })}
      </Component>
    );
  }
});

// TODO:
//   Icon 应该支持用户自定义：
//   React-native 采用 require('path/to/icon') 的形式，
//   这里可能需要再添加一个属性
TabBar.Item = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    component: React.PropTypes.any,
    icon: React.PropTypes.string, // icon name
    title: React.PropTypes.string,
    href: React.PropTypes.string,
    eventKey: React.PropTypes.any,
    badge: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    badgeStyle: React.PropTypes.string,
    selected: React.PropTypes.bool, // alias of `active`
    selectedIcon: React.PropTypes.node, // not supported now
  },

  getDefaultProps() {
    return {
      classPrefix: 'tabbar',
      component: 'span',
      onAction: function() {
      }
    };
  },

  renderBadge() {
    let {
      badge,
      badgeStyle,
    } = this.props;

    return badge ? (
      <Badge
        amStyle={badgeStyle || 'alert'}
        rounded>
        {badge}
      </Badge>
    ) : null;
  },

  renderIcon() {
    let {
      icon,
    } = this.props;

    return icon ? (
      <Icon name={icon} key="tabbarIcon">
            {this.renderBadge()}
      </Icon>) : null
  },

  renderTitle() {
    let labelClassName = this.prefixClass('label');
    let {
      title,
    } = this.props;

    return title ? (
      <span
        className={labelClassName}
        key="tabbarTitle"
      >
         {title}
       </span>
    ) : null;
  },

  render() {
    let classSet = this.getClassSet(true);
    let {
      component: Component,
      className,
      ...props
    } = this.props;
    Component = this.props.href ? 'a' : Component;
    // TODO: how to display badge when icon not set?

    return (
      <Component
        {...props}
        className={classNames(classSet, className, this.prefixClass('item'))}
      >
        {[
          this.renderIcon(),
          this.renderTitle(),
        ]}
      </Component>
    );
  }
});

export default TabBar;
