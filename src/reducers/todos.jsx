import { SAVE_TODOS_TO_STORAGE, REMOVE_TODO_FROM_STORAGE, ADD_TODO_TO_STORAGE } from '../constants/ActionTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case SAVE_TODOS_TO_STORAGE:
      return action.todos;
    case REMOVE_TODO_FROM_STORAGE:
      return state.filter(todo => todo.id!==action.id);
    case ADD_TODO_TO_STORAGE:
      return state.filter(todo => todo.id!==action.id);
    default:
      return state;
  }
}

export const saveTodosToStorage = todos => ({ type: SAVE_TODOS_TO_STORAGE, todos });
export const removeTodoFromStorage = id => ({ type: REMOVE_TODO_FROM_STORAGE, id });
export const addTodoFromStorage = todo => ({ type: ADD_TODO_TO_STORAGE, todo });
