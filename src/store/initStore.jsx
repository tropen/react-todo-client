import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import throttle from 'lodash/throttle';

//todo CLEAR
const initStore = () => {
  const loadState = () => {
    try {
      // const serializedState = localStorage.getItem('users');
      // const serializedState = localStorage.getItem('todos');
      const serializedAuth = localStorage.getItem('authKey');
      const serializedState = localStorage.getItem('state');
      if (!serializedState) {
        return undefined;
      }
      const state = JSON.parse(serializedState);
      if (serializedAuth) {
        const authKey = JSON.parse(serializedAuth);
        return { authKey, ...state };
      }

      return state;
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  };

  const saveState = (state) => {
    try {
      const {authKey, ...noAuthKeyState} = state;
      authKey ? localStorage.setItem('authKey', JSON.stringify(authKey))
        : localStorage.removeItem('authKey');
      localStorage.setItem('state', JSON.stringify(noAuthKeyState));
    } catch (e) {
      console.warn(e);
    }
  };

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, loadState(), applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  store.subscribe(throttle(() => {
    saveState({ authKey: store.getState().authKey });
  }, 500)); //limit too many updates

  return store;
};

export default initStore;
