import React from "react";
import "../cssFiles/home.css";
import TopCarousel from "./TopCarousel";
import AboutSection from "./AboutSection";
import Paralex from "./Paralex";
import CompanyProfile from "./CompanyProfile";
import OurGalleries from "./OurGalleries";
import DreamEvent from "./DreamEvent";
import BackToTop from '../Components/BackToTop.js';
import HallCarousel from "./HallCarousel";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '@fortawesome/fontawesome-free/css/all.css';

export default function Home() {
  return (
    <>
    <Navbar/>
      <TopCarousel />
      <HallCarousel/>
      <AboutSection />

      <div className="call_for_action center">
        <p className="call_for_action_txt">
          Dawat is a one window solution for your Events
        </p>
        <button className="button">
          Our Services
          <i className="fa fa-angle-double-right"></i>
        </button>
      </div>
      <DreamEvent/>
      <CompanyProfile/>
      <OurGalleries/>
      

      <div className="call_for_action center">
        <p
          style={{width: 600, textAlign: "center"}}
          className="call_for_action_txt"
        >
          With Dawat you can have control on every aspect of your event
        </p>
        <button className="button">
          Our Services
          <i className="fa fa-angle-double-right"></i>
        </button>
      </div>

      <Paralex/>
      <Footer/>
      <BackToTop/>
    </>
  );
}
