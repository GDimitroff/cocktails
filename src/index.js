import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { CocktailsProvider } from './contexts/CocktailsContext';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CocktailsProvider>
      <Router>
        <App />
      </Router>
    </CocktailsProvider>
  </React.StrictMode>
);
