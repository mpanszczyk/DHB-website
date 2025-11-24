import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Site from "./Site";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesignPage from "./DesignPage";
import RenovationsPage from "./RenovationsPage";
import CustomHomesPage from "./CustomHomesPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home / one-page site */}
        <Route path="/" element={<Site />} />

        {/* New sub-pages */}
        <Route path="/design" element={<DesignPage />} />
        <Route path="/renovations" element={<RenovationsPage />} />
        <Route path="/custom-homes" element={<CustomHomesPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
