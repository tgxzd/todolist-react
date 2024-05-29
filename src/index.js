import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import './index.css';
import App from './App';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Specify the DOM container where you want to render the app
);
