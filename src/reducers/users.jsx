import { SAVE_USERS_TO_STORAGE } from '../constants/ActionTypes';

export default function users(state = [], action) {
  switch (action.type) {
    case SAVE_USERS_TO_STORAGE:
      return action.users;
    default:
      return state;
  }
}
