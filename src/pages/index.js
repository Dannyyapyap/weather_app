import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";

let pages = (
  <Routes>
    <Route path="/" element={<Dashboard />} exact />;
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default function WeatherApplication() {
  document.title = "Weather Application";
  return (
    <>
      <BrowserRouter>{pages}</BrowserRouter>
    </>
  );
}
