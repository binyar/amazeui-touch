/**
 * Coder: fmd
 * Date: 2016/9/22
 * Time: 22:20
 */
import React, {Component, PropTypes} from 'react'
import ReactDOM, {findDOMNode} from 'react-dom'
import shallowCompare from 'react/lib/shallowCompare'

class Trigger extends Component {
  constructor(props, state) {
    super(props, state);
    this.state = {active: false};
    this.handleWrapperClick = this.handleWrapperClick.bind(this);
    this.closeTrigger = this.closeTrigger.bind(this);
    this.handleOutsideMouseClick = this.handleOutsideMouseClick.bind(this);
    this.trigger = null;
    this.node = null;
  }

  componentDidMount() {
    if (this.props.closeOnOutsideClick) {
      document.addEventListener('mouseup', this.handleOutsideMouseClick);
    }

    if (this.props.isOpened) {
      this.openTrigger();
    }
  }

  componentWillReceiveProps(newProps) {
    if (typeof newProps.isOpened !== 'undefined') {
      if (newProps.isOpened) {
        if (this.state.active) {
          this.renderTrigger(newProps);
        } else {
          this.openTrigger(newProps);
        }
      }
      if (!newProps.isOpened && this.state.active) {
        this.closeTrigger();
      }
    }
    if (typeof newProps.isOpened === 'undefined' && this.state.active) {
      this.renderTrigger(newProps);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  componentWillUnmount() {
    if (this.props.closeOnOutsideClick) {
      document.removeEventListener('mouseup', this.handleOutsideMouseClick);
    }

    this.closeTrigger(true);
  }

  handleWrapperClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.active) {
      return;
    }
    this.openTrigger();
  }

  openTrigger(props = this.props) {
    this.setState({active: true});
    this.renderTrigger(props);
    this.props.onOpen(this.node);
  }

  closeTrigger(isUnmounted = false) {
    const resetTriggerState = () => {
      if (this.node) {
        ReactDOM.unmountComponentAtNode(this.node);
        document.body.removeChild(this.node);
      }
      this.trigger = null;
      this.node = null;
      if (isUnmounted !== true) {
        this.setState({active: false});
      }
    };

    if (this.state.active) {
      if (this.props.beforeClose) {
        this.props.beforeClose(this.node, resetTriggerState);
      } else {
        resetTriggerState();
      }

      this.props.onClose();
    }
  }

  handleOutsideMouseClick(e) {
    if (!this.state.active) {
      return;
    }

    const root = findDOMNode(this.trigger);
    if (root.contains(e.target) || (e.button && e.button !== 0)) {
      return;
    }

    e.stopPropagation();
    this.closeTrigger();
  }

  renderTrigger(props) {
    if (!this.node) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
    }
    let children = props.children;
    if (typeof props.children.type === 'function') {
      children = React.cloneElement(props.children);
    }

    this.trigger = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      children,
      this.node,
      this.props.onUpdate
    );
  }

  render() {
    if (this.props.openByClickOn) {
      return React.cloneElement(this.props.openByClickOn, {onClick: this.handleWrapperClick});
    }
    return null;
  }
}
Trigger.propTypes = {}
Trigger.defaultProps = {
  onOpen: () => {
  },
  onClose: () => {
  },
  onUpdate: () => {
  },
}
export default Trigger
