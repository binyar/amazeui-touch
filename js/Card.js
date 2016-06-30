import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

import '../scss/components/_card.scss';

const Card = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    title: PropTypes.string,
    header: PropTypes.node,
    footer: PropTypes.node,
  },

  getDefaultProps() {
    return {
      classPrefix: 'card',
    };
  },

  renderItem(element, role) {
    if (!element) {
      return null;
    }

    return (element.type && element.type === Card.Child) ?
      element : <Card.Child role={role}>{element}</Card.Child>;
  },

  renderTitle(title) {
    return (
      <h2 className={this.prefixClass('title')}>
        {title}
      </h2>
    );
  },

  render() {
    let classSet = this.getClassSet();
    let {
      children,
      className,
      title,
      header,
      footer,
      ...props
    } = this.props;

    return (
      <div
        {...props}
        className={classNames(classSet, className)}
      >
        {title ?
          this.renderItem(this.renderTitle(title)) : this.renderItem(header)}

        <div className={this.prefixClass('body')}>
          {children}
        </div>

        {this.renderItem(footer, 'footer')}
      </div>
    );
  }
});

Card.Child = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    role: PropTypes.oneOf(['header', 'footer']),
    cover: PropTypes.string,
  },

  getDefaultProps() {
    return {
      classPrefix: 'card',
      role: 'header'
    };
  },

  render() {
    const {
      role,
      className,
      cover,
      ...props
    } = this.props;
    let classSet = {
      [this.prefixClass(role)]: true,
      [this.prefixClass('cover')]: cover,
    };
    let style = null;

    if (cover) {
      style = {
        backgroundImage: 'url(' + cover + ')',
      }
    }

    return (
      <div
        {...props}
        className={classNames(className, classSet)}
        role={`card-${role}`}
        style={style}
      >
        {this.props.children}
      </div>
    );
  }
});

export default Card;
