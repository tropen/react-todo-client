import { call, takeEvery } from 'redux-saga/effects';
import { apiCall } from '../util/axiosApi';
import * as actionTypes from '../constants/ActionTypes';
import { fetchAuthKey } from "./auth";
import { fetchUsers } from "./user";




export function* fetchTodos() {
  try {
    const data = yield call(apiCall, 'GET', '/todo');
    // yield put(saveTodo(data.authKey));
    console.log('fetch todos', data);
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.FETCH_AUTH_KEY, fetchAuthKey);
  yield takeEvery(actionTypes.FETCH_USERS, fetchUsers);
  yield takeEvery(actionTypes.FETCH_TODOS, fetchTodos);
}
