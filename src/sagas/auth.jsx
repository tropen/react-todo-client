import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { saveAuthKeyToStorage } from "../reducers/authKey";
import { apiCallFailed } from "./index";

export function* fetchAuthKey() {
  try {
    const data = yield call(apiCall, { method: 'POST', url: '/signin' });
    yield put(saveAuthKeyToStorage(data.authKey));
  } catch (error) {
    yield put(apiCallFailed(error));
  }
}
