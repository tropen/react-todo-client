import * as types from '../constants/ActionTypes';

export const saveAuthKeyToStorage = (authKey) => ({ type: types.SAVE_AUTH_KEY_TO_STORAGE, authKey });
export const signIn = () => ({ type: types.FETCH_AUTH_KEY });
export const signOut = () => ({ type: types.SIGN_OUT });

export const getUsers = () => ({ type: types.FETCH_USERS });
export const saveUsersToStorage = (users) => ({ type: types.SAVE_USERS_TO_STORAGE, users });

export const getTodos = () => ({ type: types.FETCH_TODOS });
export const saveTodosToStorage = (todos) => ({ type: types.SAVE_TODOS_TO_STORAGE, todos });

export const addTodo = (user_id, title, task, limit, done) => ({ type: types.ADD_TODO, user_id, title, task, limit, done });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });
export const toggleTodo = id => ({ type: types.TOGGLE_TODO, id });

export const fetchFailed = error => ({ type: types.FETCH_FAILED, error });