import * as types from '../constants/ActionTypes';

export const signIn = () => ({ type: types.FETCH_AUTH_KEY });
export const getUsers = () => ({ type: types.FETCH_USERS });

export const getTodos = () => ({ type: types.FETCH_TODOS });


export const addTodo = (user_id, title, task, limit, done) => ({ type: types.ADD_TODO, user_id, title, task, limit, done });
export const deleteTodo = id => ({ type: types.DELETE_TODO, id });

export const toggleTodo = id => ({ type: types.TOGGLE_TODO, id });
export const toggleTodoInStorage = id => ({ type: types.TOGGLE_TODO_IN_STORAGE, id });


export const apiCallFailed = error => ({ type: types.FETCH_FAILED, error });