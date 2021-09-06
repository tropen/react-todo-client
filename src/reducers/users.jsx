import { SAVE_USERS_TO_STORAGE } from '../constants/actions';

export default function users(state = [], action) {
  switch (action.type) {
    case SAVE_USERS_TO_STORAGE:
      return action.users;
    default:
      return state;
  }
}

export const saveUsersToStorage = (users) => ({ type: SAVE_USERS_TO_STORAGE, users });