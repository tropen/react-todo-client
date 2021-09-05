import {
  SAVE_TODOS_TO_STORAGE,
  REMOVE_TODO_FROM_STORAGE,
  ADD_TODO_TO_STORAGE,
  TOGGLE_TODO_IN_STORAGE, SIGN_OUT
} from '../constants/ActionTypes';
import * as types from "../constants/ActionTypes";

export default function todos(state = [], action) {
  switch (action.type) {
    case SAVE_TODOS_TO_STORAGE:
      return action.todos;
    case REMOVE_TODO_FROM_STORAGE:
      return state.filter(todo => todo.id !== action.id);
    case ADD_TODO_TO_STORAGE:
      return [ ...state, action.todo];
    case TOGGLE_TODO_IN_STORAGE:
      state.find(todo => todo.id === action.id)['done'] = action.done;
      return [...state,];
    case SIGN_OUT:
      return [];
    default:
      return state;
  }
}

export const saveTodosToStorage = todos => ({ type: SAVE_TODOS_TO_STORAGE, todos });
export const removeTodoFromStorage = id => ({ type: REMOVE_TODO_FROM_STORAGE, id });
export const addTodoToStorage = todo => ({ type: ADD_TODO_TO_STORAGE, todo });
export const toggleTodo = (id, done) => ({ type: types.TOGGLE_TODO, id, done });
export const toggleTodoInStorage = (id, done) => ({ type: types.TOGGLE_TODO_IN_STORAGE, id, done });
