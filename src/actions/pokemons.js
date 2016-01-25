import fetch from 'isomorphic-fetch';
import { pokemonsActions as actions } from 'shared/utils/constants';
import { API_URL } from 'shared/utils/constants';


function fillPokemons(pokemons) {
  return {
    type: actions.FILL,
    pokemons
  };
}

export function fetchPokemons() {
  return dispatch => {
    // fetch(API_URL + 'api/v1/pokedex/1/') testing purposes
    fetch('http://localhost:3000/public/pokedex.json')
      .then(response => response.json())
      .then(data => dispatch(fillPokemons(data.pokemon)));
  };
}
