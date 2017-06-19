import {createAction} from 'redux-actions';
import axios from 'axios';

import * as DefaultActionTypes from 'constants/DefaultActionTypes';

export function fetchData() {
  return dispatch => {
    axios.get('/api/boards');
  }
}

export function fetchData22() {
  return dispatch => {
    axios.get('/api/boards');
  }
}
