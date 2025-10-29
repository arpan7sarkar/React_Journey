import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
