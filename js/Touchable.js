/**
 * React port of Zepto touch.
 *
 * @see https://github.com/joakimbeng/react-swiper
 * @see https://github.com/dogfessional/react-swipeable
 * @see https://github.com/damusnet/react-swipe-views
 * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
 * @see https://github.com/JedWatson/react-tappable
 * @see https://github.com/madrobby/zepto/blob/master/src/touch.js
 */

import React, {
  PropTypes,
} from 'react';
import TouchableMixin from './mixins/TouchableMixin';
import createChainedFunction from './utils/createChainedFunction';
import supportTouch from './utils/isTouchSupported';
import './utils/ucUIControl';

const Touchable = React.createClass({
  mixins: [TouchableMixin],

  propTypes: {
    component: PropTypes.any,
  },

  getDefaultProps() {
    return {
      component: 'span',
    };
  },

  render() {
    const {
      component: Component,
      onTap,
      ...props,
    } = this.props;

    if (supportTouch) {
      Object.assign(props, this.getTouchHandlers());
    } else {
      // handle `tap` as `click` on non-touch devices
      props.onClick = createChainedFunction(props.onClick, onTap);
    }

    return (
      <Component
        {...props}
      >
        {this.props.children}
      </Component>
    );
  },
});

export default Touchable;
export {TouchableMixin as Mixin};

// TODO: Mixin 里似乎没必要使用 state 记录事件相关信息
// TODO: 添加 touch active className
