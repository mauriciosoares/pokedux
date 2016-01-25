import { pokemonsActions as actions } from 'shared/utils/constants';

const initialState = {
  list: {},
  pokemon: {}
};

export default function pokemons(state = initialState, action) {
  switch(action.type) {
    case actions.FILL:
      return {
        ...state,
        list: parsePokemonsList(action.pokemons)
      };

  default:
    return state;
  }
}

function parsePokemonsList(pokemons) {
  return pokemons.reduce((pokemonsObj, pokemon) => {
    // I'm not good with regexes, deal with it
    const id = pokemon.resource_uri.replace('api/v1/pokemon/', '').replace('/', ''),
      name = pokemon.name;

    pokemonsObj[id] = {
      id,
      name
    }
    return pokemonsObj;
  }, {});
}
