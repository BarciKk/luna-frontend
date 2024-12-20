import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mui/material/styles/styled';
import './style.css';
import './i18n';
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
