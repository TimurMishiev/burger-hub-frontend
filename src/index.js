import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import { Provider } from 'react-redux';
import './css/style.css';
import store from './store';




render(<Provider store={store}><Router/></Provider>, document.querySelector('#root'));


