import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Notfound from "./components/Notfound.jsx";
import Product from "./components/Product.jsx";
import Men from "./components/Men.jsx";
import Woman from "./components/Woman.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element=<Product/> />
      <Route path="/product/men" element=<Men/> />
      <Route path="/product/woman" element=<Woman/> />
      {/* path="*" is for page not found */}
      <Route path="*" element=<Notfound /> />
    </Routes>
    <Footer />
  </BrowserRouter>
);
