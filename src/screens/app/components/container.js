import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchPokemons} from 'actions/pokemons';

import List from './list';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchPokemons());
  }

  render() {
    const { pokemons } = this.props;

    console.log(this.props.children);

    return (
      <div>
        <h1>Pokedex</h1>
        { (this.props.children)
          ? this.props.children :
          <List pokemons={pokemons.list} /> }

      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
// export default App;
