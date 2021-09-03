import { call, put } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";
import { fetchFailed, saveUsersToStorage } from "../actions";

export function* fetchUsers() {
  try {
    const data = yield call(apiCall, { method: 'GET', url: '/user', token: true });
    yield put(saveUsersToStorage(data));
  } catch (error) {
    yield put(fetchFailed(error));
  }
}