import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import Theme from "./styles/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <GlobalStyles />
        <App />
        <GlobalStyles />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
