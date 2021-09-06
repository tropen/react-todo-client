import { SET_TOAST } from "../constants/actions";

const initialState = {
  open: false,
  message: null,
  severity: 'error'
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

export const showMessage = (msg, severity ='error') => ({type: SET_TOAST, open: true, msg, severity});
export const closeMessage = (msg, severity ='error') => ({type: SET_TOAST, open: false, msg, severity});