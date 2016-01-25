import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

export default (initialState) => createStoreWithMiddleware(combineReducers(reducers), initialState);
