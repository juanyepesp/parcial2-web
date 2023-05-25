import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from 'react-intl';
import localeEs from './locales/es.json';
// import localeEn from './locales/en.json';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale="es-ES" messages={localeEs}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// TODO PWA 
serviceWorkerRegistration.register();
