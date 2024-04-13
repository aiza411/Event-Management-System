import "../cssFiles/backToTop.css";
import { useEffect } from "react";

export default function BackToTop() {

  const topFunction=()=>{
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  };


  useEffect(() => {
    const scrollFunction = () => {
      const myButton = document.getElementById("myBtn");
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
    };
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <>
      <button onClick={topFunction} id="myBtn" title="Go to top">
        <i
          className="fa fa-angle-double-up"
          style={{fontSize: 15, color: 'white'}}
        ></i>
      </button>
    </>
  );
}
