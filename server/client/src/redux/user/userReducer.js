import { FETCH_USER, SET_CURRENT_USER } from '../types';

const INITIAL_STATE = {
  currentUser: null,
  token: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        token: action.payload
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;