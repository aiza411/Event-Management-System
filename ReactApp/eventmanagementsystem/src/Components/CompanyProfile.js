import React from "react";
import "../cssFiles/home.css";

export default function CompanyProfile() {
  return (
    <>
      <div className="company_profile">
        <div className="company_profile_text">
          <h1 className="zigzagline2" style={{ color: "white" }}>
            OUR COMPANY PROFILE
          </h1>
          <p style={{ textAlign: "left" }}>
            With an aim to inform its client about the services, products and
            different packages in a creative and user-friendly manner, Dawat
            maintains a Company Profile which you can download by clicking the
            button below.
          </p>
          <button className="button1">
            Download
            <i className="fa fa-angle-double-right"></i>
          </button>
        </div>

        <div className="company_profile_img">
          <img src={require("../assets/Images/Home/CompanyProfile/Book.png")} alt="Book"/>
        </div>
      </div>
    </>
  );
}
