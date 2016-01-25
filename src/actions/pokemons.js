import fetch from 'isomorphic-fetch';
import { pokemonsActions as actions } from 'shared/utils/constants';
import { API_URL } from 'shared/utils/constants';


function fillPokemons(pokemons) {
  return {
    type: actions.FILL,
    pokemons
  };
}

function fillSinglePokemons(pokemon, id) {
  return {
    type: actions.FILL_SINGLE,
    pokemon,
    id
  };
}

export function test() {
  return {
    type: 'asdf'
  }
}

export function fetchPokemons() {
  return dispatch => {
    // fetch(API_URL + 'api/v1/pokedex/1/') testing purposes
    fetch('http://localhost:3000/public/pokedex.json')
      .then(response => response.json())
      .then(data => dispatch(fillPokemons(data.pokemon)));
  };
}

export function fetchSinglePokemon(id) {
  return dispatch => {
    // fetch(API_URL + 'api/v1/pokedex/1/') testing purposes
    fetch(API_URL + `api/v1/pokemon/${id}`)
      .then(response => response.json())
      .then(pokemon => dispatch(fillSinglePokemons(pokemon, id)));
  };
}
