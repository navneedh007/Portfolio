// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './global.css';
import { createRoot } from 'react-dom/client';



const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
