import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {positions,transitions,Provider as AlertProvider} from "react-alert"
import AlertTemplate from 'react-alert-template-basic';
import store from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>  
);

