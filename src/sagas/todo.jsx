import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { fetchFailed, saveTodosToStorage } from "../actions";


export function* fetchTodos() {
  try {
    const data = yield call(apiCall, { method: 'GET', url: '/todo', token: true });
    yield put(saveTodosToStorage(data));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}