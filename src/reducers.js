/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

// immutable js reducer is ready to go for you
import { combineReducers } from 'redux-immutable';
// import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import app from './containers/App/reducer';

export default function createReducer() {
  const appReducer = combineReducers({
    app
  });

  return appReducer;
}
