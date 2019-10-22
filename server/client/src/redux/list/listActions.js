import axios from 'axios';
import { FETCH_USER , SET_CURRENT_USER } from './types';


export const handleToken = (token) => async dispatch => {
  const res = await axios.get(`${process.env.server}/api/price-list`, token);
  dispatch({ type: FETCH_USER, payload: res.data});
}