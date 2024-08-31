import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-ysjzau6zj0llrckc.us.auth0.com"
    clientId="MoLT9ABXC3GrpYF83nsT52g2uA8ue3f2"
    redirectUri={window.location.origin}
  >
    <App />  {/* This is where your App component is wrapped */}
  </Auth0Provider>
);

reportWebVitals();
