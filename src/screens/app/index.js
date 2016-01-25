import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchPokemons} from 'actions/pokemons';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchPokemons());
  }

  render() {
    const { pokemons } = this.props;

    console.log(pokemons);

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
