import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
const history = createHistory({
  queryKey: false
});

import Container from './components/container.js'
import Pokemon from './screens/pokemon/';

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Container}>
          <Route path="/pokemon/:id" component={Pokemon}></Route>
        </Route>
      </Router>
    );
  }
}
