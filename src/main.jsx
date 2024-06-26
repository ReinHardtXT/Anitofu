import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router.jsx'
import Provider from './context/Provider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import setupLocatorUI from "@locator/runtime";

if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
