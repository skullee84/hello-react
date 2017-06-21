import {createAction} from 'redux-actions';
import axios from 'axios';

import * as DefaultActionTypes from 'constants/DefaultActionTypes';

export function fetchData() {
  return dispatch => {
    axios.get('/api/boards').then((res) => {
      dispatch(createAction(DefaultActionTypes.FETCH_DATA)({boards: res.data}));
    });
  }
}

export function fetchData22() {
  return dispatch => {
    axios.get('/api/boards');
  }
}
