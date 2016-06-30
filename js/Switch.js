import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_switch.scss';

const Switch = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    name: PropTypes.string,
    amStyle: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.bool,
    onValueChange: PropTypes.func,
  },

  getDefaultProps() {
    return {
      classPrefix: 'switch',
      onValueChange: () => {},
    };
  },

  getValue() {
    return this.refs.field.checked;
  },

  render() {
    let classSet = this.getClassSet();
    const {
      name,
      className,
      onValueChange,
      value,
      disabled,
      ...props
    } = this.props;

    return (
      <label
        {...props}
        className={classNames(classSet, className)}
      >
        <input
          onChange={onValueChange.bind(this)}
          name={name}
          type="checkbox"
          ref="field"
          defaultChecked={value}
          disabled={disabled}
        />
        <span className={this.prefixClass('label')} />
      </label>
    );
  }
});

export default Switch;
