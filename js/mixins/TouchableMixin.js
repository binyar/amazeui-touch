import React, {
  PropTypes,
} from 'react';

let TouchableMixin = {
  propTypes: {
    moveThreshold: PropTypes.number,
    tapDelay: PropTypes.number,
    pressDelay: PropTypes.number,
    preventDefault: PropTypes.bool,
    stopPropagation: PropTypes.bool,

    onSwipe: PropTypes.func,
    onSwipeLeft: PropTypes.func,
    onSwipeUp: PropTypes.func,
    onSwipeRight: PropTypes.func,
    onSwipeDown: PropTypes.func,
    onTap: PropTypes.func,
    onSingleTap: PropTypes.func,
    onDoubleTap: PropTypes.func,
    onPress: PropTypes.func,
  },

  getDefaultProps() {
    return {
      moveThreshold: 30,
      tapDelay: 250,
      pressDelay: 750,
      preventDefault: true,
    };
  },

  getInitialState() {
    return {
      startTouch: null,
      endTouch: null,
      touch: {},
      deltaX: 0,
      deltaY: 0,
    };
  },

  componentWillUnmount() {
    this._cancelAll();
  },

  handleTouchStart(e) {
    // console.log('handle touchstart');
    this.processEvent(e);

    if (!e.touches) {
      return;
    }

    let touch = this.state.touch;
    let startTouch = e.touches[0];

    if (e.touches.length === 1 && touch.x2) {
      // Clear out touch movement data if we have it sticking around
      // This can occur if touchcancel doesn't fire due to preventDefault, etc.
      touch.x2 = undefined;
      touch.y2 = undefined;
    }

    let now = Date.now();
    let delta = now - (touch.last || now);

    this._touchTimeout && clearTimeout(this._touchTimeout);

    touch.x1 = startTouch.pageX;
    touch.y1 = startTouch.pageY;

    // if touchstart interval less than 250, handle as doubleTap
    if (delta > 0 && delta <= this.props.tapDelay) {
      touch.isDoubleTap = true;
    }

    // record last touch start time
    touch.last = now;

    // handle as `press` after 750ms
    this._pressTimeout = setTimeout(this._handlePress, this.props.pressDelay);

    this.setState({
      startTouch,
      touch,
    });
  },

  handleTouchMove(e) {
    // console.log('touch move');
    this.processEvent(e);

    let endTouch = e.touches[0];
    let {
      touch,
      deltaX,
      deltaY,
    } = this.state;

    this._cancelPress();

    touch.x2 = endTouch.pageX;
    touch.y2 = endTouch.pageY;

    // finger moving distance
    deltaX += Math.abs(touch.x1 - touch.x2);
    deltaY += Math.abs(touch.y1 - touch.y2);

    this.setState({
      deltaX,
      deltaY,
      touch,
      endTouch,
    });
  },

  handleTouchEnd(e) {
    // console.log('touch end..');
    this.processEvent(e);

    this._cancelPress();

    let {
      tapDelay,
      moveThreshold,
    } = this.props;
    let {
      touch,
      startTouch,
      endTouch,
      deltaX,
      deltaY,
    } = this.state;
    let event = {
      touch,
      startTouch,
      endTouch,
      preventDefault: () => {
      },
    };

    // handle as swipe event
    if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > moveThreshold) ||
      (touch.y2 && Math.abs(touch.y1 - touch.y2) > moveThreshold)) {

      event.type = 'swipe';

      this._swipeTimeout = setTimeout(() => {
        this._handleEvent(event);

        event.type += this._getSwipeDirection();
        this._handleEvent(event);
        this._resetTouch();
      }, 0);
    }
    // normal tap
    else if ('last' in touch) {
      // don't fire tap when delta position changed by more than 30 pixels,
      // for instance when moving to a point and back to origin
      if (deltaX < moveThreshold && deltaY < moveThreshold) {
        // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
        // ('tap' fires before 'scroll')
        this._tapTimeout = setTimeout(() => {
          // trigger universal 'tap' with the option to cancelTouch()
          // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
          event.type = 'tap';
          // event.cancelTouch = cancelAll;
          this._handleEvent(event);

          // trigger double tap immediately
          if (touch.isDoubleTap) {
            event.type = 'doubleTap';
            this._handleEvent(event);
            this._resetTouch();
          }
          // trigger single tap after 250ms of inactivity
          else {
            this._touchTimeout = setTimeout(() => {
              this._touchTimeout = null;
              event.type = 'singleTap';
              this._handleEvent(event);
              this._resetTouch();
            }, tapDelay)
          }
        }, 0)
      } else {
        this._resetTouch();
      }
    }
  },

  handleTouchCancel() {
    this._cancelAll();
  },

  processEvent(e) {
    this.props.preventDefault && e.preventDefault();
    this.props.stopPropagation && e.stopPropagation();
  },

  _handlePress() {
    this._pressTimeout = null;
    if (this.state.touch.last) {
      this.props.onPress && this.props.onPress();
      this._resetTouch();
    }
  },

  _cancelPress() {
    if (this._pressTimeout) {
      clearTimeout(this._pressTimeout);
    }

    this._pressTimeout = null;
  },

  _cancelAll() {
    if (this._touchTimeout) {
      clearTimeout(this._touchTimeout);
    }

    if (this._tapTimeout) {
      clearTimeout(this._tapTimeout);
    }

    if (this._swipeTimeout) {
      clearTimeout(this._swipeTimeout);
    }

    if (this._pressTimeout) {
      clearTimeout(this._pressTimeout);
    }

    this._touchTimeout = this._tapTimeout = this._swipeTimeout =
      this._pressTimeout = null;
    this._resetTouch();
  },

  _getSwipeDirection() {
    let {
      x1,
      x2,
      y1,
      y2,
    } = this.state.touch;

    // 水平方向：水平距离大于等于垂直距离
    // 垂直方向：
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ?
      (x1 - x2 > 0 ? 'Left' : 'Right') :
      (y1 - y2 > 0 ? 'Up' : 'Down');
  },

  _resetTouch() {
    this.setState(this.getInitialState());
  },

  _getEventMethodName(type) {
    return 'on' + type.charAt(0).toUpperCase() + type.slice(1);
  },

  _handleEvent(event) {
    let method = this._getEventMethodName(event.type);
    this.props[method] && this.props[method](event);
  },

  getTouchHandlers() {
    return {
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd,
      onTouchCancel: this.handleTouchCancel,
      onTouchMove: this.handleTouchMove,
    }
  },
};

export default TouchableMixin;
