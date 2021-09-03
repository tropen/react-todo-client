import axios from 'axios';
// import { useSelector } from "react-redux";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URI,
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json;charset=utf-8' }
});


export const apiCall = ({method, url, body = null, token = false}) => {
  // const authKey = useSelector(state => state.authKey);
  const onError = function (error) {
    console.error(error);
    return Promise.reject(error.response || error.message);
  };

  // store.getState().authKey
  if (token && 1) {
    // console.log(authKey);
    // const authKey = JSON.parse(localStorage.getItem('authKey'));
    client.defaults.headers.post['authentication'] = 'q';
  }

  return client({
    method,
    url: process.env.REACT_APP_API_URI + url,
    data: body,
  }).then((res) => res.data)
    .catch(onError);
};