document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".item");
    const buttons = Array.from(items, () => {
        return `<span class="carousel_btn"></span>`;
    });

    carousel.insertAdjacentHTML(
        "beforeend",
        `
    <div class="carousel_nav">
    ${buttons.join("")}
    </div>`
    );

    const button_selected = carousel.querySelectorAll(".carousel_btn");

    button_selected.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach((item) => item.classList.remove("item_selected"));
            button_selected.forEach((button) =>
                button.classList.remove("carousel_btn_selected")
            );

            items[i].classList.add("item_selected");
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
        console.log(currentIndex);

        items[currentIndex].classList.add("item_selected");
        button_selected[currentIndex].classList.add("carousel_btn_selected");
    }

    let slideshowInterval = setInterval(nextSlide, slideInterval);
});


document.addEventListener("DOMContentLoaded", function() {
    const navButtons = document.querySelectorAll(".carousel_event_nav_btn");
    const carouselItems = document.querySelectorAll(".event_item");

    carouselItems[0].classList.add("event_item_selected");
    navButtons[0].classList.add("event_carousel_btn_selected");

    navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            navButtons.forEach(btn => btn.classList.remove("event_carousel_btn_selected"));
            button.classList.add("event_carousel_btn_selected");

            carouselItems.forEach(item => item.classList.remove("event_item_selected"));
            carouselItems[index].classList.add("event_item_selected");

        });
    });
});



let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


let hall_items=document.querySelectorAll('.slider .slider_item');
let next_btn=document.getElementById('next');
let prev_btn=document.getElementById('prev');

let active=3;

function loadShow()
{
    let zIndex=1200;
    let start=0;
    hall_items[active].style.transform=`none`;
    hall_items[active].style.filter='none';
    hall_items[active].style.zIndex=zIndex;
    hall_items[active].style.opacity=1;
    for(var i=active+1 ; i<hall_items.length; i++)
    {
        start++;
        hall_items[i].style.transform=`translateX(${300*start}px) scale(${1-0.07*start}) perspective(10px) rotateY(-0.2deg)`;
        hall_items[i].style.filter='blur(1px)';
        hall_items[i].style.zIndex=--zIndex;
        hall_items[i].style.opacity=start>2?0:0.9;
    }
    start=0;
    zIndex=1200;
    for(var i=active-1; i>=0; i--)
    {
        start++;
        hall_items[i].style.transform=`translateX(${-300*start}px) scale(${1-0.07*start}) perspective(10px) rotateY(0.2deg)`;
        hall_items[i].style.filter='blur(1px)';
        hall_items[i].style.zIndex=--zIndex;
        hall_items[i].style.opacity=start>2?0:0.9;
    }
}
loadShow();

function updateActive(index) {
    active = (index + hall_items.length) % hall_items.length;
    loadShow();
}

next_btn.onclick = function () {
    updateActive(active + 1);
};

prev_btn.onclick = function () {
    updateActive(active - 1);
};


