import React from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import Button from './Button';
import Icon from './Icon';

const Field = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    type: React.PropTypes.string,
    label: React.PropTypes.node,
    btnBefore: React.PropTypes.node,
    btnAfter: React.PropTypes.node,
    labelBefore: React.PropTypes.node,
    labelAfter: React.PropTypes.node,
  },

  getDefaultProps() {
    return {
      classPrefix: 'field',
      type: 'text'
    };
  },

  getFieldDOMNode() {
    return this.refs.field;
  },

  getValue() {
    if (this.props.type === 'select' && this.props.multiple) {
      return this.getSelectedOptions();
    } else {
      return this.getFieldDOMNode().value;
    }
  },

  getChecked() {
    return this.getFieldDOMNode().checked;
  },

  getSelectedOptions() {
    let values = [];
    // see http://www.w3schools.com/jsref/coll_select_options.asp
    let options = this.getFieldDOMNode().options;

    Array.from(options).forEach((option) => {
      if (option.selected) {
        let value = option.getAttribute('value') || option.innerHtml;

        values.push(value);
      }
    });

    return values;
  },

  isCheckboxOrRadio() {
    return this.props.type === 'radio' || this.props.type === 'checkbox';
  },

  isFile() {
    return this.props.type === 'file';
  },

  // convert `value`/`defaultValue` to `checked`/`defaultChecked` when `type` is `radio`/checkbox``
  convertValueToChecked() {
    var checkedProps = {};

    if (this.isCheckboxOrRadio()) {
      const propsMap = {
        checked: 'value',
        defaultChecked: 'defaultValue',
      };

      Object.keys(propsMap).forEach((checked) => {
        let value = propsMap[checked];

        if (!this.props[checked] && this.props[value]) {
          checkedProps[checked] = value;
        }
      });
    }

    return checkedProps;
  },

  renderField() {
    let field = null;
    let fieldClassName = this.isCheckboxOrRadio() || this.isFile() ?
      '' : this.getClassSet();
    let classes = classNames(this.props.className, fieldClassName);
    let commonProps = {
      ref: 'field',
      key: 'formField',
      className: classes,
    };
    let assignedProps = {
      ...this.props,
      ...commonProps,
    };

    switch (this.props.type) {
      case 'select':
        field = (
          <select
            {...assignedProps}
          >
            {this.props.children}
          </select>
        );
        break;
      case 'textarea':
        field = (
          <textarea
            {...assignedProps}
          />
        );
        break;
      case 'submit':
      case 'reset':
        let {
          classPrefix,
          ...others
        } = this.props;
        field = (
          <Button
            {...commonProps}
            className={null}
            {...others}
            component="input"
          />
        );
        break;
      default:
        field = (
          <input
            {...assignedProps}
            {...this.convertValueToChecked()}
          />
        );
    }

    return field;
  },

  renderContainer(children) {
    return this.props.label ? (
      <label
        htmlFor={this.props.id}
        className={this.prefixClass('container')}
        key="label"
      >
        <span className={this.prefixClass('label')}>
          {this.props.label}
        </span>
        {children}
        {this.isCheckboxOrRadio() ? (
          <Icon
            className={this.prefixClass('icon')}
            name="check"
          />
        ) : null}
      </label>
    ) : children;
  },

  renderFieldGroup(children) {
    let groupPrefix = this.setClassNS('field-group');
    let labelClassName = groupPrefix + '-label';
    let {
      labelBefore,
      labelAfter,
      btnBefore,
      btnAfter,
      ...props
    } = this.props;
    let renderFiledLabel = (type) => {
      return this.props[type] ? (
        <span
          className={labelClassName}
          key={type}
        >
          {this.props[type]}
        </span>
      ) : null;
    };

    return labelBefore || labelAfter || btnBefore || btnAfter ? (
      <div
        className={groupPrefix}
        key="fieldGroup"
      >
        {renderFiledLabel('labelBefore')}
        {btnBefore}
        {children}
        {renderFiledLabel('labelAfter')}
        {btnAfter}
      </div>
    ) : children;
  },

  render() {
    let field = this.renderField();

    if (this.props.label) {
      return this.renderContainer(field);
    }

    return this.renderFieldGroup(field);
  }
});

export default Field;
