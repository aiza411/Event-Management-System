import React from "react";
import "../cssFiles/home.css";

export default function Paralex() {
  return (
    <>
      <div className="paralex">
        <h1>MAKE YOUR EVENTS COME TO LIFE WITH DAWAT</h1>
        <h5>Tons of ideas to provide countless options.</h5>

        <div>
          <button className="button3">
            Contact Us
            <i className="fa fa-angle-double-right"></i>
          </button>

          <button className="button4">
            Services For You
            <i className="fa fa-star"></i>
          </button>
        </div>
      </div>
    </>
  );
}
