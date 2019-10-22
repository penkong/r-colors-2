import axios from 'axios';
import { FETCH_USER , SET_CURRENT_USER } from '../types';


export const signupUser = formProps => async dispatch => {
  const res = await axios.post(`${process.env.server}/api/signup` , formProps);
  dispatch({ type: SET_CURRENT_USER, payload: res.data});
}

export const fetchUser = () => async dispatch => {
  const res = await axios.get(`${process.env.server}/api/current_user`);
  dispatch({ type: FETCH_USER, payload: res.data});
}


