import { SET_TOAST } from "../constants/actions";
import { ERROR } from "../constants/messageTypes";

const initialState = {
  open: false,
  message: null,
  severity: ERROR
};

export default function toast(state = initialState, action) {
  switch (action.type) {
    case SET_TOAST: {
      const { open, message, severity } = action;
      return {
        ...state,
        open,
        severity,
        message
      };
    }
    default:
      return state;
  }
}

export const showMessage = (message, severity = ERROR) => ({ type: SET_TOAST, open: true, message, severity });
export const closeMessage = (message, severity = ERROR) => ({ type: SET_TOAST, open: false, message, severity });