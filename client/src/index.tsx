import React from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './pages/landingPage';
import './index.css';
import NotFound from './pages/notFound';
import { pageNotFound } from './content'


const App: React.FC = () => {
  const path = window.location.pathname;

  const renderComponent = () => {
    switch (path) {
      case '/':
        return <LandingPage />;
      default:
        return <NotFound content={pageNotFound} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

const rootElement = document.getElementById('root'); 
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found.");
}