import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
const history = createHistory({
  queryKey: false
});

class App extends Component {
  render() {
    return (
      <div>
        <h1></h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/hue">Hue</Link></li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <h2>About</h2>
    );
  }
}

class Hue extends Component {
  render() {
    return (
      <div>
        <h2>Hue</h2>
        {this.props.children}
      </div>
    );
  }
}

class HueIndex extends Component {
  render() {
    return (
      <h3>HUE INDEX!</h3>
    );
  }
}

class HueMessage extends Component {
  render() {
    console.log(this.props);
    return (
      <h3>HUE MESSAGE!> {this.props.params.id}</h3>
    );
  }
}

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="hue" component={Hue}>
        <IndexRoute component={HueIndex} />
        <Route path="messages/:id" component={HueMessage} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));

// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from 'containers/App';

// import configureStore from 'store/configureStore'

// import 'index.sass';

// const store = configureStore();

// console.log('configs hue 2');

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// , document.getElementById('root'));
