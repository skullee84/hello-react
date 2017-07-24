import * as DefaultActionTypes from 'constants/DefaultActionTypes';

export function boards(state = [], action = null) {
  switch (action.type) {
    case DefaultActionTypes.FETCH_DATA:
      return action.payload.boards;
    default:
      return state;
  }
}
