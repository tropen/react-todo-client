import { combineReducers } from 'redux';
import authKey from './authKey';
import todos from "./todos";
import users from "./users";
import toast from "./toast";

export default combineReducers({
  authKey,
  todos,
  users,
  toast,
});

//todo add  FETCH_FAILED and test