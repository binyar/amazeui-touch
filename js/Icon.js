import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_icon.scss';

const Icon = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    href: PropTypes.string,
    // amStyle: PropTypes.string,
    // button: PropTypes.bool,
    // size: PropTypes.string,
  },

  getDefaultProps() {
    return {
      classPrefix: 'icon',
      component: 'span'
    };
  },

  render() {
    let classSet = this.getClassSet();
    let {
      component: Component,
      className,
      name,
      ...props
    } = this.props;
    Component = props.href ? 'a' : Component;

    // icon-[iconName]
    classSet[this.prefixClass(name)] = true;

    return (
      <Component
        {...props}
        className={classNames(classSet, className)}
      >
        {this.props.children}
      </Component>
    );
  }
});

export default Icon;
