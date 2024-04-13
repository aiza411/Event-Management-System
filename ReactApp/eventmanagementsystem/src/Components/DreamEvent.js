import React, { useEffect } from "react";
import "../cssFiles/home.css";

export default function DreamEvent() {
  useEffect(() => {
    const handleCarousel = () => {
      const navButtons = document.querySelectorAll(".carousel_event_nav_btn");
      const carouselItems = document.querySelectorAll(".event_item");

      carouselItems[0].classList.add("event_item_selected");
      navButtons[0].classList.add("event_carousel_btn_selected");

      navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          navButtons.forEach((btn) =>
            btn.classList.remove("event_carousel_btn_selected")
          );
          button.classList.add("event_carousel_btn_selected");

          carouselItems.forEach((item) =>
            item.classList.remove("event_item_selected")
          );
          carouselItems[index].classList.add("event_item_selected");
        });
      });
    };

    handleCarousel();

    // Cleanup event listeners when component unmounts
    return () => {
      const navButtons = document.querySelectorAll(".carousel_event_nav_btn");
      navButtons.forEach((button) => {
        button.removeEventListener("click", handleCarousel);
      });
    };
  }, []);

  return (
    <>
      <div className="dream_event">
        <h2 className="zigzagline">YOUR DREAM EVENT</h2>
        <p>
          Dawat provide countless options from Wedding to Mehndi or a Birthday
          party.
        </p>
        <p>
          We have various interactive ideas, you can mix and match all elements
          to design the perfect event for you.
        </p>

        <div className="carousel_event">
          <div className="carousel_event_nav">
            <button
              className="carousel_event_nav_btn"
              style={{
                backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Icons/heart.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></button>
            <button
              className="carousel_event_nav_btn"
              style={{
                backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Icons/diamond.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></button>
            <button
              className="carousel_event_nav_btn"
              style={{
                backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Icons/gift.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></button>
            <button
              className="carousel_event_nav_btn"
              style={{
                backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Icons/suitcase.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></button>
            <button
              className="carousel_event_nav_btn"
              style={{
                backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Icons/rocket.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></button>
          </div>

          <div className="carousel_event_content">
            <div className="event_item event_item_selected">
              <div
                className="carousel_event_content_col1"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Backgrounds/1.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h2>The Wedding</h2>
                <p>
                  We take care of each and every detail of your dream for the
                  perfect wedding. To make this day perfect as your plan we have
                  various options to work-out, and precisely four amazing themes
                  for the amazing event. We can customize each theme as per your
                  requirements, and can add lots of creative and unique ideas to
                  make your day really special.
                </p>
                <button
                  className="button"
                  style={{
                    width: 150,
                    marginTop: 15,
                    marginLeft: 0,
                    backgroundColor: "rgba(177, 135, 51, 1)",
                    border: "none",
                  }}
                >
                  See More
                  <i className="fa fa-angle-double-right"></i>
                </button>
              </div>

              <div
                className="carousel_event_content_col2"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/1.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div className="event_item">
              <div
                className="carousel_event_content_col1"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Backgrounds/2.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h2>The Mehndi</h2>
                <p>
                  We can make your Mehndi or Dholki event memorable!
                  <br />
                  We have various options to work-out, different props and
                  exciting ideas to follow, and some amazing themes that you may
                  choose from.
                  <br />
                  Lets us work on some crazy ideas and make your bhangra night
                  filled with awesomeness!
                </p>
                <button
                  className="button"
                  style={{
                    width: 150,
                    marginTop: 15,
                    marginLeft: 0,
                    backgroundColor: "rgba(177, 135, 51, 1)",
                    border: "none",
                  }}
                >
                  See More
                  <i className="fa fa-angle-double-right"></i>
                </button>
              </div>

              <div
                className="carousel_event_content_col2"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/2.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div className="event_item">
              <div
                className="carousel_event_content_col1"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Backgrounds/3.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h2>Birthday</h2>
                <p>
                  We ensure to manage everything from planning to execution, be
                  it food, decoration, entertainment or anything else that you
                  have in mind.
                </p>
                <button
                  className="button"
                  style={{
                    width: 150,
                    marginTop: 15,
                    marginLeft: 0,
                    backgroundColor: "rgba(177, 135, 51, 1)",
                    border: "none",
                  }}
                >
                  See More
                  <i className="fa fa-angle-double-right"></i>
                </button>
              </div>

              <div
                className="carousel_event_content_col2"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/3.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div className="event_item">
              <div
                className="carousel_event_content_col1"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Backgrounds/4.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h2>Corporate Events</h2>
                <p>
                  Professionally executed events are the perfect platform to
                  link knowledge with emotion to deliver memorable messages.
                </p>
                <p>
                  There is no limit to what can be done. Call us to discuss your
                  objectives and we will provide creative, impressive and cost
                  effective solutions every time.
                </p>
                <button
                  className="button"
                  style={{
                    width: 150,
                    marginTop: 15,
                    marginLeft: 0,
                    backgroundColor: "rgba(177, 135, 51, 1)",
                    border: "none",
                  }}
                >
                  See More
                  <i className="fa fa-angle-double-right"></i>
                </button>
              </div>

              <div
                className="carousel_event_content_col2"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/4.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>

            <div className="event_item">
              <div
                className="carousel_event_content_col1"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/Backgrounds/1.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <h2>Other Events</h2>
                <p>
                  Dawat has collaborated with world renown international and
                  local clients to successfully market and launch products
                  throughout Pakistan. Whether launching a brand, a business or
                  a product, the basic principles are the same. You will only
                  get one opportunity to create a powerful affinity with your
                  target audience.
                </p>

                <button
                  className="button"
                  style={{
                    width: 150,
                    marginTop: 15,
                    marginLeft: 0,
                    backgroundColor: "rgba(177, 135, 51, 1)",
                    border: "none",
                  }}
                >
                  See More
                  <i className="fa fa-angle-double-right"></i>
                </button>
              </div>

              <div
                className="carousel_event_content_col2"
                style={{
                  backgroundImage: `url(${require("../assets/Images/Home/SlideShow/Carousel_Event/5.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
