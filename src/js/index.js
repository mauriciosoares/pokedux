import { render } from 'react-dom';
import React, { Component } from 'react';
import '../sass/style.sass';

export default class App extends Component {
  render() {
    return (
      <h1>hue</h1>
    );
  }
}


render(<App />, document.getElementById('root'));
