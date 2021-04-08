import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore } from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
