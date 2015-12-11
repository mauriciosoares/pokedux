import { render } from 'react-dom';
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import '../sass/style.sass';
console.log('teste23');

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>test2</h1>

        <Link to="/about">About</Link>
        <Link to="/hue">Hue</Link>

        {this.props.children}
      </div>
    );
  }
}

function About() {
  return (
    <div>About</div>
  );
}

function Hue() {
  return (
    <div>Hue</div>
  );
}

render(
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="hue" component={Hue} />
    </Route>
  </Router>
, document.getElementById('root'));
