import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Computer from "./pages/Computer.jsx";
import Product from "./pages/Product.jsx";
import Smartphone from "./pages/Smartphone.jsx";
import Notfound from "./pages/Notfound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/product" element={<Product />} />
        <Route path="/smartphone" element={<Smartphone />} />
        <Route path="/notfound" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
