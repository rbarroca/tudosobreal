import { StrictMode } from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;

function AppTree() {
  return (
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
}

// If the container has SSG-rendered content, hydrate; otherwise mount fresh
if (container.hasChildNodes()) {
  hydrateRoot(container, <AppTree />);
} else {
  createRoot(container).render(<AppTree />);
}
