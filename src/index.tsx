import React from 'react';
import '@mantine/core/styles.css';
import ReactDOM from 'react-dom/client';
import '@mantine/notifications/styles.css';
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
