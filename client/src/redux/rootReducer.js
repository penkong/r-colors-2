//
import { combineReducers } from 'redux';
// TO PERSIST REDUCER PLUS STORE
import { persistReducer } from 'redux-persist';
// its local storage
import storage from 'redux-persist/lib/storage';


//
import userReducer from './user/userReducer';
import listReducer from './list/listReducer';

//
const persistConfig = {
  key: 'root',
  storage,
  // we persist  reducer
  // whitelist: ['']
}

const rootReducer = combineReducers({
  user: userReducer,
  // list: listReducer
})

export default persistReducer(persistConfig, rootReducer);
