import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/index.css';
import store from './js/store/index';
import App from './js/components/app';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);