import { RouterProvider } from 'react-router-dom';
import appStore from './utils/Store/appStore';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import appRouter from './App';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={appStore}>
    <RouterProvider router={appRouter} />
    </Provider>
  
);
