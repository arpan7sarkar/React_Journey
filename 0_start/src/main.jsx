import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import ThemeContext from "./Context/ThemeContext.jsx";
createRoot(document.getElementById("root")).render(
  <ThemeContext> //wrapped with ThemeContext that means centralized the data all the data that we will save inside theme context can now be accessed by others
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeContext>
);
