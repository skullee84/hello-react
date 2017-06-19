import {createAction} from 'redux-actions';
import axios from 'axios';

import * as DefaultActionTypes from 'constant/DefaultActionTypes';

export function fetchData() {
  return dispatch => {
    axios.get('/api/public/boards');
  }
}
