import React, { StrictMode } from "react";
import  ReactDOM  from "react";
import {createRoot} from "react-dom/client"

import App from "./App";

//ReactDOM.render(<h1>"Hello"</h1>,document.getElementById('root'));

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);