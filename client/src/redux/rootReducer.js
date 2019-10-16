//
import { combineReducers } from 'redux';
// TO PERSIST REDUCER PLUS STORE
import { persistReducer } from 'redux-persist';
// its local storage
import storage from 'redux-persist/lib/storage';


//
import userReducer from './user/userReducer';

//
const persistConfig = {
  key: 'root',
  storage,
  // we persist  reducer
  // whitelist: ['']
}

const rootReducer = combineReducers({
  user: userReducer,
})

export default persistReducer(persistConfig, rootReducer);
