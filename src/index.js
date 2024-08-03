import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './styles/css/main.css'
import $ from 'jquery';
import 'slicknav/dist/jquery.slicknav.min.js';
import 'slicknav/dist/slicknav.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
