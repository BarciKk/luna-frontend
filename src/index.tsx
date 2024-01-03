import React from "react";
import "@mantine/core/styles.css";
import ReactDOM from "react-dom/client";
import "@mantine/notifications/styles.css";
import "../src/style.css";

import { App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
