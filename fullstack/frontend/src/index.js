import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import store from './store';
import TechIconsProvider from './Contexts/TechIconsContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TechIconsProvider>
          <App />
        </TechIconsProvider>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>
);
