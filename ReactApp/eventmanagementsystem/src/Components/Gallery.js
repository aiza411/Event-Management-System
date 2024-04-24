import React from "react";
import "../cssFiles/gallerystyle.css"
import BackToTop from '../Components/BackToTop.js';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Gallery() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <img src={require("../assets/Images/Gallery/galleryCover.jpg")}/>
        <div className="headerText">
            <p>Gallery</p>
        </div>
    </div>
        <div style={{height: "600px"}}></div>
        <div className="content">
            <div className="visitgallery">
                <div className="content-child1">
                    <img src={require("../assets/Images/Home/SideBar/logo_2.png")}/>
                </div>
                <div className="content-child2">
                    <p className="c2heading">Instagram</p>
                    <a href="#" className="c2text">@dawatpk</a>
                </div>
                <div className="content-child3">
                    <a href="#" className="visitbutton">
                        <button className="button button1">Follow on Instagram</button>
                    </a>
                </div>
            </div>

            <div className="visitgallery">
                <div className="content-child1">
                    <img src={require("../assets/Images/Home/SideBar/logo_2.png")}/>
                </div>
                <div className="content-child2">
                    <p className="c2heading">Facebook</p>
                    <a href="#" className="c2text">@dawatpk</a>
                </div>
                <div className="content-child3">
                    <a href="#" className="visitbutton">
                        <button className="button button2">Like on Facebook</button>
                    </a>
                </div>
            </div>

            <div className="visitgallery">
                <div className="content-child1">
                    <img src={require("../assets/Images/Home/SideBar/logo_2.png")}/>
                </div>
                <div className="content-child2">
                    <p className="c2heading">Youtube</p>
                    <a href="#" className="c2text">@dawatpk</a>
                </div>
                <div className="content-child3">
                    <a href="#" className="visitbutton">
                        <button className="button button3">Subscribe on Youtube</button>
                    </a>
                </div>
            </div>
        </div>

      
      <Footer/>
      <BackToTop/>
    </>
  );
}
