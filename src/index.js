import React from "react";
import { BrowserRouter} from 'react-router-dom'
// Виправлено імпорт
import ReactDOM from "react-dom";
import "./reset.css"
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>
);
