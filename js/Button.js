import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_button.scss';

const Button = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string,
    amStyle: PropTypes.string,
    amSize: PropTypes.string,
    hollow: PropTypes.bool,
    block: PropTypes.bool,
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    // radius: PropTypes.bool,
    // rounded: PropTypes.bool,
  },

  getDefaultProps() {
    return {
      classPrefix: 'btn',
    };
  },

  renderAnchor(classes) {
    let {
      href,
      component: Component,
      children,
      ...props
    } = this.props;
    Component = Component || 'a';

    href = href || '#';

    return (
      <Component
        {...props}
        href={href}
        className={classes}
        role="button"
      >
        {children}
      </Component>
    );
  },

  renderButton(classes) {
    let {
      component: Component,
      children,
      ...props,
    } = this.props;
    Component = Component || 'button';

    return (
      <Component
        {...props}
        className={classes}
      >
        {children}
      </Component>
    );
  },

  render() {
    let classSet = this.getClassSet();
    let {
      href,
      target,
      block,
      className,
    } = this.props;
    let renderType = href || target ? 'renderAnchor' : 'renderButton';

    // block button
    classSet[this.prefixClass('block')] = block;

    return this[renderType](classNames(classSet, className));
  }
});

export default Button;
