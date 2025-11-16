import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Site from "./Site";

const el = document.getElementById("root");
if (!el) throw new Error("Root element #root not found");

createRoot(el).render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>
);
