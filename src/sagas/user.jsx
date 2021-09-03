import { call } from "redux-saga/effects";
import { apiCall } from "../util/axiosApi";

export function* fetchUsers() {
  try {
    const data = yield call(apiCall, { method: 'GET', url: '/user', token: true });
    console.log('fetch users', data);
    // yield put(saveUser(data.authKey));
  } catch (error) {
    console.log(error);
  }
}