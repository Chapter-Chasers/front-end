import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const client_Id = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={client_Id}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();