import './index.css'

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";

// To add more pages, import the component e.g. ContactPage, and add it to the route within "pages" variable. 

let pages = (
  <Routes>
    <Route path="/" element={<Dashboard />} exact />;
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default function WeatherApplication() {
  document.title = "Weather Application";
  return (
    <div className="mainContainer">
      <BrowserRouter>{pages}</BrowserRouter>
    </div>
  );
}
