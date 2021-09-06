import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { addTodoToStorage, removeTodoFromStorage, saveTodosToStorage, toggleTodoInStorage } from "../reducers/todos";
import { showMessage } from "../reducers/toast";
import { SUCCESS } from "../constants/messageTypes";
import PropTypes from "prop-types";

export function* fetchTodosRequest() {
  try {
    const data = yield call(apiCall, { method: 'GET', url: '/todo', token: true });
    yield put(saveTodosToStorage(data));
  } catch (error) {
    yield put(showMessage(error));
  }
}

export function* deleteTodoRequest({ id }) {
  try {
    yield call(apiCall, { method: 'DELETE', url: '/todo', body: { id }, token: true });
    yield put(removeTodoFromStorage(id));
    yield put(showMessage('Task deleted!', SUCCESS));
  } catch (error) {
    yield put(showMessage(error));
  }
}

deleteTodoRequest.propTypes = {
  id: PropTypes.string
};

export function* toggleTodoRequest({ id, done }) {
  try {
    yield call(apiCall, { method: 'PATCH', url: '/todo/toggle', body: { id, done }, token: true });
    yield put(toggleTodoInStorage(id, done));
    yield put(showMessage('Task status changed', SUCCESS));
  } catch (error) {
    yield put(showMessage(error));
  }
}

toggleTodoRequest.propTypes = {
  id: PropTypes.string,
  done: PropTypes.bool,
};

export function* addTodoRequest({ user_id, title, task, limit, done, callback }) {
  try {
    const data = yield call(apiCall, {
      method: 'POST',
      url: '/todo/',
      body: { user_id, title, task, limit, done },
      token: true
    });
    yield put(addTodoToStorage(data.todo));
    yield put(showMessage(`New task added: ${data.todo.title}`, SUCCESS));
    yield call(callback);
  } catch (error) {
    yield put(showMessage(error));
  }
}

addTodoRequest.propTypes = {
  user_id: PropTypes.string,
  title: PropTypes.string,
  task: PropTypes.string,
  limit: PropTypes.string,
  done: PropTypes.bool,
  callback: PropTypes.func,
};
