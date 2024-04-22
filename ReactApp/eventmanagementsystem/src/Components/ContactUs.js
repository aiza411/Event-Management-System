import React from "react";
import Header from "../Components/Header.js";
import ContactForm from "../Components/ContactForm.js";
import FindUs from "../Components/FindUs.js";
import NewsLetter from "../Components/NewsLetter.js";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <Header />
      <ContactForm />
      <hr />
      <FindUs />
      <hr />
      <NewsLetter />
      <Footer/>
    </>
  );
}
