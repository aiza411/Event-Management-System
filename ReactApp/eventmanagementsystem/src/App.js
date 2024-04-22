import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home.js';
import Franchise from './Components/Franchise.js';
import MenuPage from "./Components/MenuPage.js";
import ContactUs from "./Components/ContactUs.js";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
