import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
const history = createHistory({
  queryKey: false
});

import routeConfig from './utils/route-config';

export default class App extends Component {
  render() {
    return (
      <Router history={history} routes={routeConfig} />
    );
  }
}
