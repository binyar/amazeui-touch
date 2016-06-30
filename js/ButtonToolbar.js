import React, {
  cloneElement,
  PropTypes,
} from 'react';
import classNames from 'classnames';
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

    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classSet)}
      >
        {this.props.children}
      </div>
    );
  }
});

export default ButtonToolbar;
