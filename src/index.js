import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import store from "./js/store/index";
import { addArticle } from "./js/actions/index";

window.store = store;
window.addArticle = addArticle;

ReactDOM.render(
  <p>Hallo</p>,
  document.getElementById('root')
);