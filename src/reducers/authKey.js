import { SAVE_AUTH_KEY } from '../constants/ActionTypes';

export default function authKey(state = '', action) {
  switch (action.type) {
    case SAVE_AUTH_KEY:
      return action.authKey;
    default:
      return state;
  }
}