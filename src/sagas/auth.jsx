import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { apiCallFailed, } from "../actions";
import { saveAuthKeyToStorage } from "../reducers/authKey";

export function* fetchAuthKey() {
  try {
    const data = yield call(apiCall, { method: 'POST', url: '/signin' });
    yield put(saveAuthKeyToStorage(data.authKey));
  } catch (error) {
    yield put(apiCallFailed(error));
  }
}