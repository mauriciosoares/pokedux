import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSinglePokemon } from 'actions/pokemons';

import { POKEMON_IMG_PATH } from 'shared/utils/constants';

class Pokemon extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const { cache } = this.props.pokemons;
    const { id } = this.props.params;

    if(!cache[id]) {
      dispatch(fetchSinglePokemon(id));
    }
  }

  render() {
    const { id } = this.props.params;
    const { cache } = this.props.pokemons;

    return (
      <div>
        { (cache[id])
          ? this.renderPokemon() :
          'fetching pokemon' }
      </div>
    );
  }

  renderPokemon() {
    const { id } = this.props.params;
    const pokemon = this.props.pokemons.cache[id];

    return(
      <div>
        <h2>{pokemon.name}</h2>
        <img src={POKEMON_IMG_PATH + id + '.png'} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Pokemon);
