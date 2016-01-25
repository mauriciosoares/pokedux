import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSinglePokemon } from 'actions/pokemons';

import { POKEMON_IMG_PATH } from 'shared/utils/constants';

class Pokemon extends Component {
  componentDidMount() {
    const { dispatch, cache } = this.props;
    const { id } = this.props.params;

    if(!cache[id]) {
      dispatch(fetchSinglePokemon(id));
    }
  }

  render() {
    const { id } = this.props.params;

    console.log(this.props.cache[id]);

        // <img src={POKEMON_IMG_PATH + id + '.png'} />
    return (
      <div>
        Fetching...
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cache } = state.pokemons;
  return {
    cache
  };
}

export default connect(mapStateToProps)(Pokemon);
