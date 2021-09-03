import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { saveAuthKey,  } from "../actions";

export function* fetchAuthKey() {
  try {
    const data = yield call(apiCall, { method: 'POST', url: '/signin' });
    yield put(saveAuthKey(data.authKey));
  } catch (error) {
    console.log(error);
  }
}