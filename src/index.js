import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider, LayoutProvider } from './Context';


// Call make Server
makeServer();

ReactDOM.render(

  <BrowserRouter>
    <AlertProvider>
      <LayoutProvider>
        <App />
      </LayoutProvider>
      </AlertProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
