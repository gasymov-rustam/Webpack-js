import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
// import './app/style/global.scss';
import { ErrorBoundary, StoreProvider } from './providers';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </React.StrictMode>,
);
