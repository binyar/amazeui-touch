import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_view.scss';

const View = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
  },

  getDefaultProps() {
    return {
      classPrefix: 'view',
      component: 'div',
    };
  },

  render() {
    const {
      component,
      className,
      ...props,
    } = this.props;

    return React.createElement(component, {
      ...props,
      className: classNames(className, this.getClassSet()),
    });
  },
});

export default View;
