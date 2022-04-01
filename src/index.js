import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider, LayoutProvider, LikedVideosProvider, PlaylistProvider } from './Context';

// Call make Server
makeServer();

ReactDOM.render(

  <BrowserRouter>
    <AlertProvider>
      <LayoutProvider>
        <LikedVideosProvider>
          <PlaylistProvider>
            <App />
          </PlaylistProvider>
         </LikedVideosProvider>
        </LayoutProvider>
      </AlertProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
