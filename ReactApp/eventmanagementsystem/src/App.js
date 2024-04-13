import logo from "./logo.svg";
import "./App.css";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import BackToTop from './Components/BackToTop.js';
import Home from './Components/Home.js';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <BackToTop />
      <Footer/>
    </>
  );
}

export default App;
