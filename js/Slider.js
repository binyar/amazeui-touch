/**
 * @see https://github.com/react-bootstrap/react-bootstrap/blob/master/src/Carousel.js
 */

import React, {
  PropTypes,
} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import TransitionEvents from './utils/TransitionEvents';
import Icon from './Icon';
import Touchable from './Touchable';

import '../scss/components/_slider.scss';

const Slider = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string,

    controls: PropTypes.bool,   // prev/next icon
    pager: PropTypes.bool,      // indicators or thumbs

    slide: PropTypes.bool,      // what is this?
    interval: PropTypes.number, // interval
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,       // loop slide

    pauseOnHover: PropTypes.bool,
    // touch: PropTypes.bool,

    onAction: PropTypes.func,
    onSlideEnd: PropTypes.func,
    activeIndex: PropTypes.number,
    defaultActiveIndex: PropTypes.number,
    direction: PropTypes.oneOf(['prev', 'next']),
    prevIcon: PropTypes.node,
    nextIcon: PropTypes.node,
  },

  getDefaultProps() {
    return {
      classPrefix: 'slider',
      controls: true,
      pager: true,
      slide: true,
      interval: 5000,
      autoPlay: true,
      loop: true,
      pauseOnHover: true,
      prevIcon: <Icon name="left-nav" />,
      nextIcon: <Icon name="right-nav" />,
    };
  },

  getInitialState() {
    return {
      activeIndex: this.props.defaultActiveIndex == null ?
        0 : this.props.defaultActiveIndex,
      previousActiveIndex: null,
      direction: null
    };
  },

  componentWillReceiveProps(nextProps) {
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null &&
      nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction :
          this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }
  },

  componentDidMount() {
    this.props.autoPlay && this.waitForNext();
  },

  componentWillUnmount() {
    clearTimeout(this.timeout);
  },

  getDirection(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  },

  next(e) {
    e && e.preventDefault();

    var index = this.getActiveIndex() + 1;
    var count = React.Children.count(this.props.children);

    if (index > count - 1) {
      if (!this.props.loop) {
        return;
      }
      index = 0;
    }

    this.handleSelect(index, 'next');
  },

  prev(e) {
    e && e.preventDefault();

    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.loop) {
        return;
      }
      index = React.Children.count(this.props.children) - 1;
    }

    this.handleSelect(index, 'prev');
  },

  pause() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  },

  play() {
    this.isPaused = false;
    this.waitForNext();
  },

  waitForNext() {
    if (!this.isPaused && this.props.slide && this.props.interval &&
      this.props.activeIndex == null) {
      this.timeout = setTimeout(this.next, this.props.interval);
    }
  },

  handleMouseOver() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  },

  handleMouseOut() {
    if (this.isPaused) {
      this.play();
    }
  },

  handleSwipeLeft(e) {
    // console.log('swipe left');
    this.next();
  },

  handleSwipeRight(e) {
    // console.log('swipe right....');
    this.prev();
  },

  getActiveIndex() {
    return this.props.activeIndex != null ?
      this.props.activeIndex : this.state.activeIndex;
  },

  handleItemAnimateOutEnd() {
    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function() {
      this.waitForNext();

      if (this.props.onSlideEnd) {
        this.props.onSlideEnd();
      }
    });
  },

  handleSelect(index, direction, e) {
    e && e.preventDefault();
    clearTimeout(this.timeout);

    let previousActiveIndex = this.getActiveIndex();

    direction = direction || this.getDirection(previousActiveIndex, index);

    if (this.props.onAction) {
      this.props.onAction(index, direction);
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queuing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  },

  renderControls() {
    return this.props.controls ? (
      <div className={this.prefixClass('control')}>
        <Touchable
          className={this.prefixClass('control-prev')}
          onTap={this.prev}
          stopPropagation
        >
          {this.props.prevIcon}
        </Touchable>
        <Touchable
          className={this.prefixClass('control-next')}
          onTap={this.next}
          stopPropagation
        >
          {this.props.nextIcon}
        </Touchable>
      </div>
    ) : null;
  },

  renderPager() {
    if (this.props.pager) {
      let isThumbnailNav = false;

      let children = React.Children.map(this.props.children, (child, i) => {
        let className = (i === this.getActiveIndex()) ?
          this.setClassNS('active') : null;
        let thumb = child.props.thumbnail;

        if (!isThumbnailNav) {
          isThumbnailNav = !!thumb;
        }

        return (
          <Touchable
            component="li"
            className={className}
            key={i}
            onTap={this.handleSelect.bind(this, i, null)}
          >
            {thumb ? <img src={thumb} /> : null}
          </Touchable>
        );
      });
      let pagerClassName = this.prefixClass(isThumbnailNav ? 'thumbs' :
        'indicators');

      return (
        <ol
          className={classNames(this.prefixClass('pager'), pagerClassName)}
        >
          {children}
        </ol>
      );
    }

    return null;
  },

  renderItem(child, index) {
    let activeIndex = this.getActiveIndex();
    let isActive = (index === activeIndex);
    let isPreviousActive = this.state.previousActiveIndex != null &&
      this.state.previousActiveIndex === index && this.props.slide;
    let props = {
      active: isActive,
      ref: child.ref,
      key: child.key ? child.key : index,
      index: index,
      animateOut: isPreviousActive,
      animateIn: isActive && this.state.previousActiveIndex != null &&
      this.props.slide,
      direction: this.state.direction,
      onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
    };

    return React.cloneElement(child, props);
  },

  render() {
    let classSet = this.getClassSet();
    let {
      className,
      children,
      ...props
    } = this.props;

    // TODO: 优化 swipe，左右方向阻止默认事件，垂直方向不阻止
    return (
      <Touchable
        {...props}
        component="div"
        className={classNames(classSet, className)}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        onSwipeLeft={this.handleSwipeLeft}
        onSwipeRight={this.handleSwipeRight}
        preventDefault={false}
        stopPropagation={true}
      >
        <ul className={this.prefixClass('slides')}>
          {React.Children.map(children, this.renderItem)}
        </ul>
        {this.renderControls()}
        {this.renderPager()}
      </Touchable>
    );
  }
});

Slider.Item = React.createClass({
  propTypes: {
    direction: PropTypes.oneOf(['prev', 'next']),
    onAnimateOutEnd: PropTypes.func,
    active: PropTypes.bool,
    animateIn: PropTypes.bool,
    animateOut: PropTypes.bool,
    caption: PropTypes.node,
    index: PropTypes.number,
    thumbnail: PropTypes.string,
  },

  getInitialState() {
    return {
      direction: null
    };
  },

  getDefaultProps() {
    return {
      animation: true
    };
  },

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  },

  componentDidUpdate(prevProps) {
    if (!this.props.active && prevProps.active) {
      TransitionEvents.on(ReactDOM.findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (this.props.active !== prevProps.active) {
      setTimeout(this.startAnimation, 20);
    }
  },

  handleAnimateOutEnd() {
    if (this.props.onAnimateOutEnd && this.isMounted()) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  },

  startAnimation() {
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ?
        'right' : 'left'
    });
  },

  render() {
    let {
      className,
      active,
      animateIn,
      animateOut,
      direction,
    } = this.props;
    let classSet = {
      active: (active && !animateIn) || animateOut,
      next: active && animateIn && direction === 'next',
      prev: active && animateIn && direction === 'prev'
    };

    if (this.state.direction && (animateIn || animateOut)) {
      classSet[this.state.direction] = true;
    }

    return (
      <li
        className={classNames(className, classSet)}
      >
        {this.props.children}
      </li>
    );
  }
});

export default Slider;
