import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "@fontsource/montserrat";
import "@fontsource/source-serif-4";
import "@fontsource/libre-caslon-text";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
