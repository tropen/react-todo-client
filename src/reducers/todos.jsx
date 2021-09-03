import { SAVE_TODOS_TO_STORAGE } from '../constants/ActionTypes';

export default function todos(state = [], action) {
  switch (action.type) {
    case SAVE_TODOS_TO_STORAGE:
      return action.todos;
    //todo check loading?
    // case 'GET_NEWS':
    //   return { ...state, loading: true };
    // case 'NEWS_RECEIVED':
    //   return { ...state, news: action.json[0], loading: false };
    default:
      return state;
  }
}
