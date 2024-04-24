import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home.js';
import Franchise from './Components/Franchise.js';
import MenuPage from "./Components/MenuPage.js";
import ContactUs from "./Components/ContactUs.js";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
