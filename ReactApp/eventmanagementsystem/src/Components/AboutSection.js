import React from "react";
import "../cssFiles/home.css";

export default function AboutSection() {
  return (
    <>
      <div className="dawat_abt center">
        <div className="column">
          <img
            src={require("../assets/Images/Home/SideBar/logo_2.png")}
            alt="Dawat Pakistan"
          />
        </div>

        <div className="column">
          <h2>WHAT IS DAWAT?</h2>

          <div>
            <p className="abt-list"> Complete Event Management Company</p>
            <p className="abt-list"> Wedding and Party Caterers</p>
            <p className="abt-list"> Public Relations Agency</p>
            <p className="abt-list"> Photography Studio</p>
            <p className="abt-list"> Interior and Set Designers</p>
            <p className="abt-list"> Institute for Event Management Courses</p>
          </div>
        </div>
      </div>
    </>
  );
}
