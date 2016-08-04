import React, {
  PropTypes,
} from 'react';
import cx from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import CollapseMixin from './mixins/CollapseMixin';
import Icon from './Icon';

import '../scss/components/_accordion.scss';

const Accordion = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: PropTypes.string,
    activeKey: PropTypes.any,
    defaultActiveKey: PropTypes.any,
    inset: PropTypes.bool,
    onAction: PropTypes.func,
  },

  getDefaultProps() {
    return {
      classPrefix: 'accordion',
    };
  },

  getInitialState() {
    return {
      activeKey: this.props.defaultActiveKey || null
    };
  },

  shouldComponentUpdate: function() {
    // Defer any updates to this component during the `onAction` handler.
    return !this._isChanging;
  },

  handleSelect(e, key) {
    e.preventDefault();

    if (this.props.onAction) {
      this._isChanging = true;
      this.props.onAction(key);
      this._isChanging = false;
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  },

  renderItems() {
    let activeKey = this.props.activeKey != null ?
      this.props.activeKey : this.state.activeKey;

    return React.Children.map(this.props.children, (child, index) => {
      let {
        eventKey,
      } = child.props;
      let props = {
        key: index,
        onAction: this.handleSelect,
      };

      if (eventKey === undefined) {
        props.eventKey = eventKey = index;
      }

      props.expanded = eventKey === activeKey;

      return React.cloneElement(child, props);
    });
  },

  render() {
    let {
      className,
      inset,
      ...props
    } = this.props;
    let classSet = this.getClassSet();

    delete props.classPrefix;
    delete props.activeKey;
    delete props.defaultActiveKey;
    delete props.onAction;

    classSet[this.prefixClass('inset')] = inset;

    return (
      <section
        {...props}
        className={cx(classSet, className)}
      >
        {this.renderItems()}
      </section>
    );
  }
});

const AccordionItem = React.createClass({
  mixins: [ClassNameMixin, CollapseMixin],

  propTypes: {
    title: React.PropTypes.node,
    eventKey: React.PropTypes.any,
  },

  handleClick: function(e) {
    // @see https://facebook.github.io/react/docs/events.html#event-pooling
    e.persist();
    e.selected = true;

    if (this.props.onAction) {
      this.props.onAction(e, this.props.eventKey);
    } else {
      e.preventDefault();
    }

    if (e.selected) {
      this.handleToggle();
    }
  },

  handleToggle() {
    this.setState({expanded: !this.state.expanded});
  },

  getCollapsibleDimensionValue() {
    return this.refs.panel.scrollHeight;
  },

  getCollapsibleDOMNode() {
    if (!this.isMounted() || !this.refs || !this.refs.panel) {
      return null;
    }

    return this.refs.panel;
  },

  render() {
    return (
      <dl
        className={cx(this.setClassNS('accordion-item'),
        this.isExpanded() ? this.setClassNS('active') : null)}
      >
        <dt
          onClick={this.handleClick}
          className={this.setClassNS('accordion-title')}
        >
          {this.props.title}
          <Icon
            className={this.setClassNS('accordion-icon')}
            name="right-nav"
          />
        </dt>
        <dd
          className={cx(this.setClassNS('accordion-body'),
            this.getCollapsibleClassSet())}
          ref="panel"
        >
          <div
            className={this.setClassNS('accordion-content')}
          >
            {this.props.children}
          </div>
        </dd>
      </dl>
    );
  }
});

Accordion.Item = AccordionItem;

export default Accordion;
