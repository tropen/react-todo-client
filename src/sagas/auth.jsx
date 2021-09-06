import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { saveAuthKeyToStorage } from "../reducers/authKey";

import { showMessage } from "../reducers/toast";
import { SUCCESS } from "../constants/messageTypes";

export function* fetchAuthKey() {
  try {
    const data = yield call(apiCall, { method: 'POST', url: '/signin' });
    yield put(saveAuthKeyToStorage(data.authKey));
    yield put(showMessage("Welcome!", SUCCESS));
  } catch (error) {
    yield put(showMessage(error));
  }
}
