import { SAVE_AUTH_KEY_TO_STORAGE, SIGN_OUT } from '../constants/ActionTypes';

export default function authKey(state = '', action) {
  switch (action.type) {
    case SAVE_AUTH_KEY_TO_STORAGE:
      return action.authKey;
    case SIGN_OUT:
      return '';
    default:
      return state;
  }
}

export const saveAuthKeyToStorage = (authKey) => ({ type: SAVE_AUTH_KEY_TO_STORAGE, authKey });
export const signOut = () => ({ type: SIGN_OUT });