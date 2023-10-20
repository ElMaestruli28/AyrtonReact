import React from 'react';
import ReactDOM from 'react-dom';
import {RouterProvider, createHashRouter } from 'react-router-dom';
import App from './assets/pages/App.jsx';
import AppEn from './assets/pages/AppEn.jsx';
import ErrorPage from './assets/pages/ErrorPage.jsx';
import Alfano from './assets/pages/Alfano.jsx';
import { ThemeProvider } from '@material-tailwind/react';

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
    path: '/en',
    element: <AppEn />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ThemeProvider>
    <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);
