import React, { useEffect } from "react";

export default function HallCarousel() {
    useEffect(() => {
        let hallItems = document.querySelectorAll('.slider .slider_item');
        let nextBtn = document.getElementById('next');
        let prevBtn = document.getElementById('prev');
        let active = 3;

        function loadShow() {
            let zIndex = 1200;
            let start = 0;
            hallItems[active].style.transform = 'none';
            hallItems[active].style.filter = 'none';
            hallItems[active].style.zIndex = zIndex;
            hallItems[active].style.opacity = 1;
            for (let i = active + 1; i < hallItems.length; i++) {
                start++;
                hallItems[i].style.transform = `translateX(${300 * start}px) scale(${1 - 0.07 * start}) perspective(10px) rotateY(-0.2deg)`;
                hallItems[i].style.filter = 'blur(1px)';
                hallItems[i].style.zIndex = --zIndex;
                hallItems[i].style.opacity = start > 2 ? 0 : 0.9;
            }
            start = 0;
            zIndex = 1200;
            for (let i = active - 1; i >= 0; i--) {
                start++;
                hallItems[i].style.transform = `translateX(${-300 * start}px) scale(${1 - 0.07 * start}) perspective(10px) rotateY(0.2deg)`;
                hallItems[i].style.filter = 'blur(1px)';
                hallItems[i].style.zIndex = --zIndex;
                hallItems[i].style.opacity = start > 2 ? 0 : 0.9;
            }
        }

        loadShow();

        function updateActive(index) {
            active = (index + hallItems.length) % hallItems.length;
            loadShow();
        }

        nextBtn.onclick = () => {
            updateActive(active + 1);
        };

        prevBtn.onclick = () => {
            updateActive(active - 1);
        };

        // Cleanup event listeners when component unmounts
        return () => {
            nextBtn.onclick = null;
            prevBtn.onclick = null;
        };
    }, []);
  return (
    <>
      <div className="carousel_hall">
            <h1>Your Story is Ours</h1>

            <div className="slider">

                <div className="slider_item">
                    <img src={require("../assets/Images/Home/SlideShow/Carousel_Halls/1.jpg")} alt="img"/>
                </div>

                <div className="slider_item">
                    <img src={require("../assets/Images/Home/SlideShow/Carousel_Halls/2.jpg")}  alt="img"/>
                </div>

                <div className="slider_item">
                    <img src={require("../assets/Images/Home/SlideShow/Carousel_Halls/3.jpg")} alt="img"/>
                </div>

                <div className="slider_item">
                    <img src={require("../assets/Images/Home/SlideShow/Carousel_Halls/4.jpg")} alt="img"/>
                </div>

                <div className="slider_item">
                    <img src={require("../assets/Images/Home/SlideShow/Carousel_Halls/5.jpg")} alt="img"/>
                </div>

                <div className="slider_item">
                    <img src={require("../assets/Images/Home/SlideShow/Carousel_Halls/6.jpg")} alt="img"/>
                </div>


                <button id="next" style={{right: 100}}><i className="fa fa-angle-right" style={{fontSize: 25}}></i></button>
                <button id="prev" style={{left: 100}}>
                <i className="fa fa-angle-left" style={{fontSize: 25}}></i></button>
            </div>


        </div>
    </>
  )
}
