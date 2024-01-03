import React from 'react';
import ReactDOM from 'react-dom';
import "@clayui/css/lib/css/atlas.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from '@clayui/core';
import icons from './svg/icons.svg';

const spritemap = icons;

ReactDOM.render(
  <React.StrictMode>
    <Provider spritemap={spritemap}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
