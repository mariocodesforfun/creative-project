import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  // Using HashRouter here
import './styles/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>  {/* Only wrap App with HashRouter in index.js */}
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
