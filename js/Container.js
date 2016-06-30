// @see https://github.com/JedWatson/react-container
// @license MIT Copyright (c) 2015 Jed Watson

import React, {
  PropTypes,
} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_container.scss';

function hasChildrenWithVerticalFill(children) {
  let result = false;

  React.Children.forEach(children, (child) => {
    if (result) {
      return; // early-exit
    }

    if (!child) {
      return;
    }

    if (!child.type) {
      return
    }

    result = !!child.type.shouldFillVerticalSpace;
  });

  return result;
}

function initScrollable(defaultPos) {
  if (!defaultPos) {
    defaultPos = {};
  }

  let pos;
  let scrollable = {
    reset() {
      pos = {left: defaultPos.left || 0, top: defaultPos.top || 0};
    },
    getPos() {
      return {left: pos.left, top: pos.top};
    },
    mount(element) {
      let node = React.findDOMNode(element);
      node.scrollLeft = pos.left;
      node.scrollTop = pos.top;
    },
    unmount(element) {
      let node = React.findDOMNode(element);
      pos.left = node.scrollLeft;
      pos.top = node.scrollTop;
    }
  };

  scrollable.reset();

  return scrollable;
}

const TRANSITION_TIMEOUT = 500;

let Container = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string,
    component: PropTypes.node,
    align: PropTypes.oneOf(['end', 'center', 'start']),
    direction: PropTypes.oneOf(['column', 'row']),
    fill: PropTypes.bool,
    grow: PropTypes.bool,
    justify: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['end', 'center', 'start'])
    ]),
    scrollable: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object
    ]),
    transition: PropTypes.string,
  },

  getDefaultProps() {
    return {
      classPrefix: 'container',
      component: 'div',
    };
  },

  componentDidMount() {
    if (this.props.scrollable && this.props.scrollable.mount) {
      this.props.scrollable.mount(this);
    }
  },

  componentWillUnmount() {
    if (this.props.scrollable && this.props.scrollable.unmount) {
      this.props.scrollable.unmount(this);
    }
  },

  render() {
    let {
      className,
      component: Component,
      children,
      direction,
      fill,
      align,
      justify,
      scrollable,
      transition,
      ...props
    } = this.props;
    let classSet = this.getClassSet();

    // As view transition container
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

    if (!direction) {
      if (hasChildrenWithVerticalFill(children)) {
        direction = 'column';
      }
    }

    if (direction === 'column' || scrollable) {
      fill = true;
    }

    if (direction === 'column' && align === 'top') {
      align = 'start';
    }

    if (direction === 'column' && align === 'bottom') {
      align = 'end';
    }

    if (direction === 'row' && align === 'left') {
      align = 'start';
    }

    if (direction === 'row' && align === 'right') {
      align = 'end';
    }

    let classes = classNames(classSet, className, {
      [this.prefixClass('fill')]: fill,
      [this.prefixClass('column')]: direction === 'column',
      [this.prefixClass('row')]: direction === 'row',
      [this.prefixClass('align-center')]: align === 'center',
      [this.prefixClass('align-start')]: align === 'start',
      [this.prefixClass('align-end')]: align === 'end',
      [this.prefixClass('justify-center')]: justify === 'center',
      [this.prefixClass('justify-start')]: justify === 'start',
      [this.prefixClass('justify-end')]: justify === 'end',
      [this.prefixClass('justified')]: justify === true,
      [this.prefixClass('scrollable')]: scrollable
    });

    return (
      <Component
        className={classes}
        {...props}
      >
        {children}
      </Component>
    );
  }
});

Container.initScrollable = initScrollable;

export default Container;
