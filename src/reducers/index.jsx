import { combineReducers } from 'redux';
import authKey from './authKey';
import todos from "./todos";
import users from "./users";

export default combineReducers({
  authKey,
  todos,
  users,
});

//todo add  FETCH_FAILED and test