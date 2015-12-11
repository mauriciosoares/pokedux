import { render } from 'react-dom';
import React, { Component } from 'react';
import '../css/style.css';

export default class App extends Component {
  render() {
    return (
      <h1>:)</h1>
    );
  }
}


render(<App />, document.getElementById('root'));
