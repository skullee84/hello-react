import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import * as DefaultReducer from './DefaultReducers';

const defaultReducer = combineReducers(DefaultReducer);

const defaultStore = combineReducers({
  default: defaultReducer
});

export const rootReducer = combineReducers({
  defaultStore: defaultStore,
  routing: routerReducer
});
