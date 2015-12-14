import { pokemonsActions as actions } from '../utils/constants';

const initialState = {
  list: [],
  pokemon: {}
};

export default function suggestions(state = initialState, action) {
  switch(action.type) {
    case actions.RECEIVE_SUGGESTIONS:

  default:
    return state;
  }
}
