import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../actions/pokemons';

class App extends Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div>
        App
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
// export default App;
