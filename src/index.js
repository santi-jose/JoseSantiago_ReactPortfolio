import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = "Santi's Portfolio" // set title of website

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
