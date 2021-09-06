import { takeEvery } from 'redux-saga/effects';
import { fetchAuthKey } from "./auth";
import { fetchUsersRequest } from "./user";
import { addTodoRequest, deleteTodoRequest, fetchTodosRequest, toggleTodoRequest, } from "./todo";
import {
  ADD_TODO,
  DELETE_TODO,
  FETCH_AUTH_KEY,
  FETCH_FAILED,
  FETCH_TODOS,
  FETCH_USERS,
  TOGGLE_TODO
} from "../constants/actions";

export default function* rootSaga() {
  yield takeEvery(FETCH_AUTH_KEY, fetchAuthKey);
  yield takeEvery(FETCH_USERS, fetchUsersRequest);
  yield takeEvery(FETCH_TODOS, fetchTodosRequest);
  yield takeEvery(DELETE_TODO, deleteTodoRequest);
  yield takeEvery(TOGGLE_TODO, toggleTodoRequest);
  yield takeEvery(ADD_TODO, addTodoRequest);
}

export const signIn = () => ({ type: FETCH_AUTH_KEY });
export const getUsers = () => ({ type: FETCH_USERS });

export const getTodos = () => ({ type: FETCH_TODOS });
export const deleteTodo = id => ({ type: DELETE_TODO, id });
export const toggleTodo = (id, done) => ({ type: TOGGLE_TODO, id, done });
export const addTodo = ({ user_id, title, task, limit, done }, callback) => ({
  type: ADD_TODO,
  user_id,
  title,
  task,
  limit,
  done,
  callback
});

export const apiCallFailed = error => ({ type: FETCH_FAILED, error });