import React from 'react';
import {
  Router,
  Route,
  hashHistory,
  browserHistory,
  IndexRoute,
} from 'react-router';

import App from './components/App';
import {
  Detail,
  Default,
} from './components/Detail';

/* global SERVER_RENDING */
const routes = (
  <Router history={SERVER_RENDING ? browserHistory : hashHistory}>
    <Route path="/" component={App}>
      <Route path=":component" component={Detail} />
      <IndexRoute component={Default} />
    </Route>
  </Router>
);

export default routes;
