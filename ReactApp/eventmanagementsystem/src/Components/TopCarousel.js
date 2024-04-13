import React, { useEffect } from "react";
import "../cssFiles/home.css";

export default function TopCarousel() {
  useEffect(() => {
    const carousel = document.querySelector(".carousel");
    const items = carousel.querySelectorAll(".item");
    const buttons = Array.from(items, (_, i) => {
      return `<span class="carousel_btn" data-index="${i}"></span>`;
    });

    carousel.insertAdjacentHTML(
      "beforeend",
      `
      <div class="carousel_nav">
        ${buttons.join("")}
      </div>`
    );

    const button_selected = carousel.querySelectorAll(".carousel_btn");

    button_selected.forEach((button) => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"));

        items.forEach((item) => item.classList.remove("item_selected"));
        button_selected.forEach((button) =>
          button.classList.remove("carousel_btn_selected")
        );

        items[index].classList.add("item_selected");
        button.classList.add("carousel_btn_selected");
      });
    });

    items[0].classList.add("item_selected");
    button_selected[0].classList.add("carousel_btn_selected");

    let currentIndex = 0;
    const slideInterval = 7000;

    function nextSlide() {
      items[currentIndex].classList.remove("item_selected");
      button_selected[currentIndex].classList.remove("carousel_btn_selected");

      currentIndex = (currentIndex + 1) % items.length;

      items[currentIndex].classList.add("item_selected");
      button_selected[currentIndex].classList.add("carousel_btn_selected");
    }

    let slideshowInterval = setInterval(nextSlide, slideInterval);

    return () => clearInterval(slideshowInterval);
  }, []);

  return (
    <>
      <div className="carousel">
        <div
          className="item item_selected"
          style={{
            backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Top/1.jpeg")})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="content">
            <h1>WELCOME TO</h1>
            <h1 style={{ color: "rgba(177, 135, 51, 1)" }}>DAWAT</h1>
            <p>
              The Biggest Event Management Company in Pakistan with versatile
              skills and services.
            </p>

            <button className="button" style={{ marginTop: 15, marginLeft: 0 }}>
              Read About Us
              <i className="fa fa-angle-double-right"></i>
            </button>
          </div>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Top/2.jpg")})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="content">
            <h1>SINDH PUNJAB</h1>
            <h1 style={{ color: "rgba(177, 135, 51, 1)" }}>BALOCHISTAN KPK</h1>
            <p>
              Dawat operates across Pakistan! Where ever you are we will be
              there for you.
            </p>

            <button className="button" style={{ marginTop: 15, marginLeft: 0 }}>
              Read About Us
              <i className="fa fa-angle-double-right"></i>
            </button>
          </div>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Top/6.jpg")})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="content">
            <h1>WE DESIGN YOUR</h1>
            <h1 style={{ color: "rgba(177, 135, 51, 1)" }}>DREAMS</h1>
            <p>
              At Dawat we take your events as a our personal venture, because we
              believe Your Story is Ours.
            </p>

            <button className="button" style={{ marginTop: 15, marginLeft: 0 }}>
              See More
              <i className="fa fa-angle-double-right"></i>
            </button>
          </div>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Top/5.jpg")})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="content">
            <h1>DESTINATION</h1>
            <h1 style={{ color: "rgba(177, 135, 51, 1)" }}>WEDDINGS</h1>
            <p>
              Whether it is Thialand or Srilanka, Turkey or Azerbaijan, Dawat
              can plan a fabulous wedding, miles away for you.
            </p>

            <button className="button" style={{ marginTop: 15, marginLeft: 0 }}>
              See More
              <i className="fa fa-angle-double-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
