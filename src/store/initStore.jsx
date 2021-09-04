import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const initStore = () => {
  const loadState = () => {
    try {
      let state = {};
      const serializedAuth = localStorage.getItem('authKey');
      if (serializedAuth) {
        const authKey = JSON.parse(serializedAuth);
        state = { authKey };
      }
      const serializedState = localStorage.getItem('state');
      if (serializedState) {
        const parsed = JSON.parse(serializedState);
        state = { ...parsed, ...state };
      }

      return state;
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  };

  const saveState = (state) => {
    try {
      const { authKey, ...noAuthKeyState } = state;
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

  store.subscribe(() => {
    saveState({
      authKey: store.getState().authKey,
      users: store.getState().users,
      todos: store.getState().todos,
    });
  });

  return store;
};

export default initStore;
