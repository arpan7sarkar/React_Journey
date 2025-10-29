import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import Men from "./pages/Men.jsx";
import Woman from "./pages/Woman.jsx";
import Courses from "./pages/Courses.jsx";
import Notfound from "./Pages/Notfound.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Nav2 from "./components/Nav2.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
const App = () => {
  return (
     <BrowserRouter>
    <Navbar />
    <Nav2/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/course" element={<Courses/>} />
      <Route path="/course/:courseId" element={<CourseDetail/>} />
      <Route path="/product" element=<Product/> >
       <Route path="men" element=<Men/> />
      <Route path="woman" element=<Woman/> />
      </Route> 
     
      {/* path="*" is for page not found */}
      <Route path="*" element=<Notfound /> />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default App
