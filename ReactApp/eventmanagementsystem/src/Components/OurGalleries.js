import React from "react";
import "../cssFiles/home.css";

export default function OurGalleries() {
  return (
    <>
      <div className="our_galleries">
        <h1 className="zigzagline">OUR GALLERIES</h1>
        <p>
          Have a look at our galleries to create your own style for your event
          with us.
        </p>

        <div className="wedding_gallery">
          <div
            className="description"
            style={{
              backgroundImage: `url(${require("../assets/Images/Home/WeddingGallery/1.png")})`,
              backgroundRepeat: "no-repeat",
              marginRight: 15,
            }}
          >
            <h3
              style={{ color: "black", textAlign: "left" }}
              className="zigzagline2"
            >
              WEDDING GALLERY
            </h3>
            <p>
              We take care of each and every detail of your dream for the
              marriage. To make it perfect as your plan we have various options
              and amazing themes.
            </p>
            <button className="button2">View Now</button>
          </div>
          <div
            className="image"
            style={{
              backgroundImage: `url(${require("../assets/Images/Home/WeddingGallery/img1.jpg")})`,
              backgroundRepeat: "no-repeat",
              marginLeft: 15,
            }}
          ></div>
        </div>

        <div className="wedding_gallery">
          <div
            className="image"
            style={{
              backgroundImage: `url(${require("../assets/Images/Home/WeddingGallery/img2.jpg")})`,
              backgroundRepeat: "no-repeat",
              marginRight: 15,
            }}
          ></div>
          <div
            className="description"
            style={{
              backgroundImage: `url(${require("../assets/Images/Home/WeddingGallery/2.png")})`,
              backgroundRepeat: "no-repeat",
              marginLeft: 15,
            }}
          >
            <h3
              style={{ color: "black", textAlign: "left" }}
              className="zigzagline2"
            >
              MEHNDI GALLERY
            </h3>
            <p>
              To make your Mehndi the perfect event, we have various options to
              work-out, with amazing themes for the event.
            </p>
            <button className="button2">View Now</button>
          </div>
        </div>
      </div>
    </>
  );
}
