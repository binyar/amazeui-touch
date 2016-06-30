import React, {
  cloneElement,
  PropTypes,
} from 'react';
import {
  findDOMNode,
} from 'react-dom';
import ClassNameMixin from './mixins/ClassNameMixin';
import OverlayMixin from './mixins/OverlayMixin';
import CSSCore from './utils/CSSCore';
import TransitionEvents from './utils/TransitionEvents';
import createChainedFunction from './utils/createChainedFunction';

const OffCanvasTrigger = React.createClass({
  mixins: [OverlayMixin, ClassNameMixin],

  propTypes: {
    defaultOffCanvasActive: PropTypes.bool,
    placement: PropTypes.oneOf(['left', 'right']),
    animation: PropTypes.oneOf(['slide', 'push']),
    offCanvas: PropTypes.node.isRequired,
    pageContainer: PropTypes.node,
    onOpen: PropTypes.func,
    onClosed: PropTypes.func,
  },

  getDefaultProps() {
    return {
      placement: 'left',
      animation: 'slide',
      onOpen: () => {
      },
      onClosed: () => {
      },
    };
  },

  getInitialState() {
    return {
      offCanvasActive: this.props.defaultOffCanvasActive == null ?
        false : this.props.defaultOffCanvasActive,
      isClosing: false,
    };
  },

  componentDidMount() {
    this.setPageContainer();
  },

  open() {
    if (this.state.offCanvasActive) {
      return;
    }

    this.setState({
      offCanvasActive: true,
      isClosing: false,
    }, function() {
      this.props.onOpen();
    });

    if (this.isPush()) {
      CSSCore.addClass(
        this.getContainerDOMNode(),
        this.getWithClassName()
      );
    }
  },

  close() {
    if (!this.state.offCanvasActive || this.state.isClosing) {
      return;
    }

    this.setState({
      isClosing: true,
    });

    if (this.isPush()) {
      let container = this.getContainerDOMNode();
      CSSCore.removeClass(container, this.getWithClassName());
      CSSCore.addClass(container, this.getClosingClassName());
    }
  },

  handleClosed() {
    this.setState({
      offCanvasActive: false,
      isClosing: false,
    });

    this.props.onClosed();

    if (this.isPush()) {
      CSSCore.removeClass(
        this.getContainerDOMNode(),
        this.getClosingClassName()
      );
    }
  },

  toggle() {
    this.state.offCanvasActive ? this.close() : this.open();
  },

  isPush() {
    return this.props.animation === 'push';
  },

  getPageContainer() {
    let {
      pageContainer
    } = this.props;

    return typeof pageContainer === 'string' ?
      document.querySelector(pageContainer) : findDOMNode(pageContainer);
  },

  setPageContainer() {
    let pageContainer = this.getPageContainer();

    if (pageContainer && this.isPush()) {
      CSSCore.addClass(pageContainer, this.setClassNS('offcanvas-push-target'));
    }
  },

  getWithClassName() {
    return 'with-offcanvas-' + this.props.placement;
  },

  getClosingClassName() {
    return 'with-offcanvas-closing';
  },

  // used by Mixin
  renderOverlay() {
    if (!this.state.offCanvasActive) {
      return <span />;
    }

    let offCanvas = this.props.offCanvas;
    let {
      isClosing,
    } = this.state;

    if (isClosing) {
      let node = this.getOverlayDOMNode();
      if (node) {
        let closedHandler = (e) => {
          if (e && e.target !== node) {
            return;
          }

          TransitionEvents.off(node, closedHandler);
          this.handleClosed();
        };

        TransitionEvents.on(node, closedHandler);
      } else {
        this.handleClosed();
      }
    }

    return cloneElement(offCanvas, {
      placement: this.props.placement,
      animation: this.props.animation,
      isClosing,
      onDismiss: this.close,
    });
  },

  render() {
    let child = React.Children.only(this.props.children);
    let props = {
      onClick: createChainedFunction(child.props.onClick,
        this.props.onClick),
    };

    props.onClick = createChainedFunction(this.toggle, props.onClick);

    return cloneElement(child, props);
  }
});

export default OffCanvasTrigger;
