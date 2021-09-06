import {
  ADD_TODO_TO_STORAGE,
  REMOVE_TODO_FROM_STORAGE,
  SAVE_TODOS_TO_STORAGE,
  SIGN_OUT,
  TOGGLE_TODO_IN_STORAGE
} from '../constants/actions';

export default function todos(state = [], action) {
  switch (action.type) {
    case SAVE_TODOS_TO_STORAGE:
      return action.todos;
    case REMOVE_TODO_FROM_STORAGE:
      return state.filter(todo => todo.id !== action.id);
    case ADD_TODO_TO_STORAGE:
      console.log('add to storage', action);
      return [...state, action.todo];
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
export const addTodoToStorage = todo => ({ type: ADD_TODO_TO_STORAGE, todo });
export const removeTodoFromStorage = id => ({ type: REMOVE_TODO_FROM_STORAGE, id });
export const toggleTodoInStorage = (id, done) => ({ type: TOGGLE_TODO_IN_STORAGE, id, done });
