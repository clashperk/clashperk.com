import { HashRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
import App from './App.jsx';
import React from 'react';
import './index.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);