import React, {
  createClass,
  PropTypes,
} from 'react';
import ReactDOM, {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer as renderSubtreeIntoContainer,
} from 'react-dom';
import CSSCore from '../utils/CSSCore';
import {
  canUseDOM,
} from '../utils/exenv';
import bodyElement from '../utils/bodyElement';
import Modal from './Modal';

const bodyClassName = 'has-modal-open';

const ModalPortal = createClass({
  propTypes: {
    isOpen: PropTypes.bool.isRequired,
  },

  getDefaultProps() {
    return {
      isOpen: false,
    };
  },

  componentDidMount() {
    this.node = document.createElement('div');
    this.node.className = '__modal-portal';
    bodyElement.appendChild(this.node);
    this.renderModal(this.props);
  },

  componentWillReceiveProps(nextProps) {
    this.renderModal(nextProps);
  },

  componentWillUnmount() {
    unmountComponentAtNode(this.node);
    bodyElement.removeChild(this.node);
    CSSCore.removeClass(bodyElement, bodyClassName);
  },

  renderModal(props) {
    CSSCore[(props.isOpen ? 'add' : 'remove') + 'Class'](bodyElement, bodyClassName);
    this.portal = renderSubtreeIntoContainer(
      this,
      <Modal {...props} />,
      this.node
    );
  },

  render() {
    return null;
  }
});

export default ModalPortal;
