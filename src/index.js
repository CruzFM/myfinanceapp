import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { BalanceProvider } from './context/BalanceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BalanceProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </BalanceProvider>
  );
