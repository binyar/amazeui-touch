import React from 'react';
import Container from '../../js/Container';
import Sidebar from './Sidebar';
import * as docs from '../components';

docs['getting-started'] = docs.gettingStarted;

const isSM = matchMedia('(max-width: 640px)').matches;

function isNodeInTree(node, tree) {
  while (node) {
    if (node === tree) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
};

const sidebar = <Sidebar />;

const ComponentDoc = React.createClass({
  getInitialState() {
    return {
      sidebarActive: false,
    };
  },

  componentDidMount() {
    document.addEventListener('click' , this._clickHandler);
  },

  componentWillUnmount() {
    document.removeEventListener('click', this._clickHandler)
  },

  _clickHandler(e) {
    const isFilter = e.target === document.querySelector('#doc-filter');

    if (isSM && !isFilter && !isNodeInTree(e.target, this.refs.sidebarToggle) &&
      this.state.sidebarActive) {
      this.setState({
        sidebarActive: !this.state.sidebarActive,
      });
    }
  },

  sidebarToggle(e) {
    e && e.preventDefault();

    this.setState({
      sidebarActive: !this.state.sidebarActive,
    });
  },

  render() {
    let {
      component,
      params,
      ...props,
      } = this.props;
    // Getting URL Parameters
    component = component || params.component;

    const Doc = docs[component] || React.createClass({
        render() {
          return <h2>Not Found.</h2>;
        }
      });

    const activeClassName = this.state.sidebarActive ? ' active' : '';

    return (
      <Container
        fill
        role="doc-main"
      >
        <Sidebar className={activeClassName} />
        <Doc />
        <a
          ref="sidebarToggle"
          onClick={this.sidebarToggle}
          href="#sidebar"
          className={`sidebar-toggle ${activeClassName}`}
        >
          <span />
        </a>
      </Container>
    );
  }
});

export default ComponentDoc;
