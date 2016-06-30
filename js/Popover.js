import React, {
  PropTypes,
} from 'react';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import BackdropMixin from './mixins/BackdropMixin';

import '../scss/components/_popover.scss';

const Popover = React.createClass({
  mixins: [ClassNameMixin, BackdropMixin],

  propTypes: {
    classPrefix: PropTypes.string,
    placement: PropTypes.oneOf(['top', 'bottom', 'horizontal']),
    positionLeft: PropTypes.number,
    positionTop: PropTypes.number,
    angleLeft: PropTypes.number,
    angleTop: PropTypes.number,
    anglePosition: PropTypes.string,
    onDismiss: PropTypes.func,
  },

  getDefaultProps() {
    return {
      classPrefix: 'popover',
    };
  },

  handleBackdropClick(e) {
    if (e && e.target === this.refs.backdrop) {
      let {
        onDismiss,
      } = this.props;

      onDismiss && onDismiss();
    }
  },

  render() {
    let classSet = this.getClassSet();
    let {
      className,
      children,
      positionLeft,
      positionTop,
      angleLeft,
      angleTop,
      anglePosition,
      isClosing,
      placement,
      ...props
    } = this.props;
    let style = {
      left: positionLeft,
      top: positionTop,
    };
    let angleStyle = {
      left: angleLeft,
      top: angleTop,
    };

    classSet[this.prefixClass('out')] = isClosing;
    classSet[this.prefixClass(placement)] = placement;

    let popover = (
      <div
        {...props}
        style={style}
        ref="overlay"
        className={classNames(classSet, className)}
      >
        <div className={this.prefixClass('inner')}>
          {children}
        </div>
        <div
          style={angleStyle}
          className={classNames(this.prefixClass('angle'),
          anglePosition ? this.prefixClass('angle-' + anglePosition) : null
          )}
        />
      </div>
    );

    return this.renderBackdrop(popover);
  }
});

export default Popover;
