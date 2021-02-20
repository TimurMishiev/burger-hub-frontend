import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './components/Landing.js'
import { Provider } from 'react-redux';
import store from './store.js';
import './css/style.css';




ReactDOM.render(
<Provider store={ store }>
  <Landing />
  <App />
</Provider>, 
document.getElementById('root'));


