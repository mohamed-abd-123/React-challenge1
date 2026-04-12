import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // ✅ import du bon fichier
import Challange from './challange'; // ✅ import du bon fichier

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Challange />
  </React.StrictMode>
);