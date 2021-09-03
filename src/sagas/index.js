import { put, takeEvery, call } from 'redux-saga/effects';
import { apiCall } from '../util/axiosApi';
import * as actionTypes from '../constants/ActionTypes';
// eslint-disable-next-line no-unused-vars
import { getTodos, getUsers, saveAuthKey } from "../actions";

export function* fetchAuthKey() {
  try {
    const data = yield call(apiCall, { method: 'POST', url: '/signin' });
    yield put(saveAuthKey(data.authKey));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchUsers() {
  try {
    const data = yield call(apiCall, { method: 'GET', url: '/user', token: true });
    console.log('fetch users', data);
    // yield put(saveUser(data.authKey));
  } catch (error) {
    console.log(error);
  }
}

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
