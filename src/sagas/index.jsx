import { takeEvery } from 'redux-saga/effects';
import * as types from '../constants/ActionTypes';
import { fetchAuthKey } from "./auth";
import { fetchUsers } from "./user";
import { fetchTodos } from "./todo";

export default function* rootSaga() {
  yield takeEvery(types.FETCH_AUTH_KEY, fetchAuthKey);
  yield takeEvery(types.FETCH_USERS, fetchUsers);
  yield takeEvery(types.FETCH_TODOS, fetchTodos);
}
