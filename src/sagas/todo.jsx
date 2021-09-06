import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { addTodoToStorage, removeTodoFromStorage, saveTodosToStorage, toggleTodoInStorage } from "../reducers/todos";
import { apiCallFailed } from "./index";

export function* fetchTodosRequest() {
  try {
    const data = yield call(apiCall, { method: 'GET', url: '/todo', token: true });
    yield put(saveTodosToStorage(data));
  } catch (error) {
    yield put(apiCallFailed(error));
  }
}

export function* deleteTodoRequest({ id }) {
  try {
    yield call(apiCall, { method: 'DELETE', url: '/todo', body: { id }, token: true });
    yield put(removeTodoFromStorage(id));
  } catch (error) {
    yield put(apiCallFailed(error));
  }
}

export function* toggleTodoRequest({ id, done }) {
  try {
    yield call(apiCall, { method: 'PATCH', url: '/todo/toggle', body: { id, done }, token: true });
    yield put(toggleTodoInStorage(id, done));
  } catch (error) {
    yield put(apiCallFailed(error));
  }
}

export function* addTodoRequest({ user_id, title, task, limit, done }) {
  try {
    const data = yield call(apiCall, {
      method: 'POST',
      url: '/todo/',
      body: { user_id, title, task, limit, done },
      token: true
    });
    console.log('addTodoToStorage', data);
    yield put(addTodoToStorage(data.todo));
  } catch (error) {
    yield put(apiCallFailed(error));
  }
}