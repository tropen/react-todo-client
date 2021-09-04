import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { apiCallFailed } from "../actions";
import { removeTodoFromStorage, saveTodosToStorage } from "../reducers/todos";


export function* fetchTodos() {
  try {
    const data = yield call(apiCall, { method: 'GET', url: '/todo', token: true });
    yield put(saveTodosToStorage(data));
  } catch (error) {
    yield put(apiCallFailed(error));
  }
}

export function* deleteTodo({ id }) {
  try {
    yield call(apiCall, { method: 'DELETE', url: '/todo', body:{id}, token: true });
    yield put(removeTodoFromStorage(id));
  } catch (error) {
    yield put(apiCallFailed(error));
  }
}