import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { saveUsersToStorage } from "../reducers/users";
import { apiCallFailed } from "./index";

export function* fetchUsersRequest() {
  try {
    const data = yield call(apiCall, { method: 'GET', url: '/user', token: true });
    yield put(saveUsersToStorage(data));
  } catch (error) {
    yield put(apiCallFailed(error));
  }
}
