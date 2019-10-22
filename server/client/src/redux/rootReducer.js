//
import { combineReducers } from 'redux';
// TO PERSIST REDUCER PLUS STORE
import { persistReducer } from 'redux-persist';
// its local storage
import storage from 'redux-persist/lib/storage';


//
import userReducer from './user/userReducer';
// import listReducer from './list/listReducer';
import errorReducer from './error/errorReducer';

//
const persistConfig = {
  key: 'root',
  storage,
  // we persist  reducer
  // whitelist: ['']
}

const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer
  // list: listReducer
})

export default persistReducer(persistConfig, rootReducer);
