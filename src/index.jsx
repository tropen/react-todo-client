import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import initStore from './store/initStore';

const store = initStore();

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

