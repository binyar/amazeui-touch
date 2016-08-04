import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_button-group.scss';

const ButtonToolbar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
  },

  getDefaultProps() {
    return {
      classPrefix: 'btn-toolbar',
    };
  },

  render() {
    let classSet = this.getClassSet();
    let {
      className,
      children,
      ...props
    } = this.props;

    delete props.classPrefix;

    return (
      <div
        {...props}
        className={cx(className, classSet)}
      >
        {children}
      </div>
    );
  }
});

export default ButtonToolbar;
