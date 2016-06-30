/**
 * modified version of:
 * https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleMixin.js
 */

import React from 'react';
import TransitionEvents from '../utils/TransitionEvents';

var CollapseMixin = {
  propTypes: {
    defaultExpanded: React.PropTypes.bool,
    expanded: React.PropTypes.bool
  },

  getInitialState() {
    var defaultExpanded = this.props.defaultExpanded != null ?
      this.props.defaultExpanded :
      this.props.expanded != null ? this.props.expanded : false;

    return {
      expanded: defaultExpanded,
      collapsing: false
    };
  },

  componentWillUpdate(nextProps, nextState) {
    var willExpanded = nextProps.expanded != null ? nextProps.expanded :
      nextState.expanded;

    if (willExpanded === this.isExpanded()) {
      return;
    }

    // if the expanded state is being toggled, ensure node has a dimension value
    // this is needed for the animation to work and needs to be set before
    // the collapsing class is applied (after collapsing is applied the in class
    // is removed and the node's dimension will be wrong)

    var node = this.getCollapsibleDOMNode();
    var dimension = this.dimension();
    var value = '0';

    if (!willExpanded) {
      // get height
      value = this.getCollapsibleDimensionValue();
    }

    node.style[dimension] = value + 'px';

    this._afterWillUpdate();
  },

  componentDidUpdate(prevProps, prevState) {
    // check if expanded is being toggled; if so, set collapsing
    this._checkToggleCollapsing(prevProps, prevState);

    // check if collapsing was turned on; if so, start animation
    this._checkStartAnimation();
  },

  // helps enable test stubs
  _afterWillUpdate() {
  },

  _checkStartAnimation() {
    if (!this.state.collapsing) {
      return;
    }

    var node = this.getCollapsibleDOMNode();
    var dimension = this.dimension();
    var value = this.getCollapsibleDimensionValue();

    // setting the dimension here starts the transition animation
    var result;

    if (this.isExpanded()) {
      result = value + 'px';
    } else {
      result = '0px';
    }
    node.style[dimension] = result;
  },

  _checkToggleCollapsing(prevProps, prevState) {
    var wasExpanded = prevProps.expanded != null ? prevProps.expanded :
      prevState.expanded;
    var isExpanded = this.isExpanded();

    if (wasExpanded !== isExpanded) {
      if (wasExpanded) {
        this._handleCollapse();
      } else {
        this._handleExpand();
      }
    }
  },

  _handleExpand() {
    var node = this.getCollapsibleDOMNode();
    var dimension = this.dimension();

    var complete = function() {
      this._removeEndEventListener(node, complete);
      // remove dimension value - this ensures the collapsible item can grow
      // in dimension after initial display (such as an image loading)
      node.style[dimension] = '';
      this.setState({
        collapsing: false
      });
    }.bind(this);

    this._addEndEventListener(node, complete);

    this.setState({
      collapsing: true
    });
  },

  _handleCollapse() {
    var node = this.getCollapsibleDOMNode();
    var _this = this;
    var complete = function() {
      _this._removeEndEventListener(node, complete);
      _this.setState({
        collapsing: false
      });
    };

    this._addEndEventListener(node, complete);

    this.setState({
      collapsing: true
    });
  },

  // helps enable test stubs
  _addEndEventListener(node, complete) {
    TransitionEvents.on(node, complete);
  },

  // helps enable test stubs
  _removeEndEventListener(node, complete) {
    TransitionEvents.off(node, complete);
  },

  dimension() {
    return (typeof this.getCollapsibleDimension === 'function') ?
      this.getCollapsibleDimension() : 'height';
  },

  isExpanded() {
    return this.props.expanded != null ? this.props.expanded : this.state.expanded;
  },

  getCollapsibleClassSet(className) {
    var classSet = {};

    if (typeof className === 'string') {
      className.split(' ').forEach(function(subClass) {
        if (subClass) {
          classSet[subClass] = true;
        }
      });
    }

    classSet[this.setClassNS('collapsing')] = this.state.collapsing;
    classSet[this.setClassNS('collapse')] = !this.state.collapsing;
    classSet[this.setClassNS('in')] = this.isExpanded() &&
      !this.state.collapsing;

    return classSet;
  }
};

export default CollapseMixin;
