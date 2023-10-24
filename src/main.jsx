import React from 'react';
import ReactDOM from 'react-dom';
import {RouterProvider, createHashRouter } from 'react-router-dom';
import App from './assets/pages/App.jsx';
import ErrorPage from './assets/pages/ErrorPage.jsx';
import Alfano from './assets/pages/Alfano.jsx';
import { ThemeProvider } from '@material-tailwind/react';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import global_es from "./assets/translations/es/global.json"
import global_en from "./assets/translations/en/global.json"

const router = createHashRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path: '/soporte',
    element: <Alfano />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

i18next.init({
  interpolation: {escapeValue: false},
  lng:"es",
  resources: {
    es: {
      global: global_es
    },
    en: {
      global: global_en
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
      <ThemeProvider>
    <RouterProvider router={router} />
      </ThemeProvider>
      </I18nextProvider>
  </React.StrictMode>
);
