import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
} from 'react-router';

import '../style/app.scss';

import Container from '../../js/Container';

import ComponentDoc from './ComponentDoc';
import Index from './Index';

const Header = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      navActive: false,
    };
  },

  onClick() {
    this.setState({
      navActive: !this.state.navActive,
    });
  },

  renderLink(route, title) {
    const pathName = `/${route}`;

    return (
      <li className={this.context.router.isActive(pathName) ? 'am-active' : ''}>
        <Link to={pathName}>{title}</Link>
      </li>
    );
  },

  render() {
    const navActive = this.state.navActive;
    const active = navActive ? 'am-in' : '';
    const icon = navActive ? 'close' : 'bars';

    return (
      <header className="am-topbar am-topbar-inverse amt-header">
        <h1 className="am-topbar-brand">
          <a href="/" className="am-text-ir">Amaze UI Touch</a>
          <span className="am-badge am-badge-danger">Touch</span>
        </h1>

        <a
          className="am-show-sm-only am-topbar-toggle"
          onClick={this.onClick}
        >
          <span className={`am-icon-${icon}`}></span>
        </a>

        <div className={`am-collapse am-topbar-collapse ${active}`}>
          <ul className="am-nav am-nav-pills am-topbar-nav am-topbar-left">
            {this.renderLink('docs/getting-started', '开发文档')}
            <li><a href="http://amazeui.org/" target="_blank">Amaze UI Web</a></li>
          </ul>
        </div>
      </header>
    );
  }
});

const App = React.createClass({
  render() {
    return (
      <Container direction="column" id="main-route">
        <Header />
        <Container fill direction="column">
          {this.props.children}
        </Container>
      </Container>
    );
  }
});

App.NotFound = React.createClass({
  render() {
    return (
      <h2>Oops, 404 Not Found.</h2>
    );
  }
});

App.Components = React.createClass({
  render() {
    return (
      <Container fill direction="column">
        {this.props.children}
      </Container>
    );
  }
});

const GettingStarted = React.createClass({
  render() {
    return <ComponentDoc component="getting-started" />
  }
});

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="docs" component={App.Components}>
        <Route path=":component" component={ComponentDoc} />
        <IndexRoute component={GettingStarted} />
      </Route>
      <IndexRoute component={Index} />
    </Route>
  </Router>
);

// Initial App
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('root'));
});
