import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';

const Grid = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
    collapse: PropTypes.bool,
    avg: PropTypes.number,
    align: PropTypes.oneOf(['right', 'center', 'between', 'around']),
    wrap: PropTypes.oneOf(['wrap', 'wrap-reverse']),
  },

  getDefaultProps() {
    return {
      classPrefix: 'g',
      component: 'div',
    };
  },

  render: function() {
    let classSet = this.getClassSet();
    let {
      component: Component,
      collapse,
      className,
      avg,
      align,
      wrap,
      ...props
    } = this.props;

    // .g-collapse
    classSet[this.prefixClass('collapse')] = collapse;
    
    // .g-wrap
    classSet[this.prefixClass(wrap)] = wrap;

    if (avg) {
      classSet[this.prefixClass('avg-' + avg)] = true;
    }

    if (align) {
      classSet[this.prefixClass(align)] = true;
    }

    return (
      <Component
        {...props}
        className={classNames(className, classSet)}
      >
        {this.props.children}
      </Component>
    );
  }
});

export default Grid;
