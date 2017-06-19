import Immutable from 'immutable';
import * as DefaultActionTypes from 'constant/DefaultActionTypes';

export function eventData(state = {}, action = null) {
  switch (action.type) {
    case DefaultActionTypes.FETCH_DATA:
      return action.payload.eventData;
    default:
      return state;
  }
}
