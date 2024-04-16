import "../cssFiles/navbar.css";
import "../cssFiles/sidebar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const sidebarToggle = document.querySelector(".sidebarBtn");

    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    sidebarToggle.addEventListener("click", handleSidebarToggle);

    return () => {
      sidebarToggle.removeEventListener("click", handleSidebarToggle);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header>
        <nav id="navigationBar">
          <a id="NavLogo" href="/">
            <img
              id="LogoImg"
              src={require("../assets/Images/Home/logo.png")}
              alt="Logo"
            />
          </a>

          <div className="menu">
            <Link to="/">Home</Link>
            <a href="/">Services</a>
            <a href="/">Gallery</a>
            <a href="/">Menu</a>
            <Link to="/franchise">Franchise</Link>
            <a href="/">Contact Us</a>
          </div>

          <button className="sidebarBtn">
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </header>

      <section className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="container">
          <div className="sidebar-content">
            <div className="logo">
              <img
                src={require("../assets/Images/Home/SideBar/logo_2.png")}
                alt="Dawat Pakistan"
              />
            </div>
            <p>
              Explore our creative options, and let us make your next event
              everything you dream of and more.
            </p>

            <div className="social_icons">
              <a href="/" style={{ textDecoration: "none" }}>
                <i
                  style={{ fontSize: 25 }}
                  className="fa fa-facebook-square"
                ></i>
              </a>
              <a href="/" style={{ textDecoration: "none" }}>
                <i style={{ fontSize: 25 }} className="fa fa-twitter"></i>
              </a>
              <a href="/" style={{ textDecoration: "none" }}>
                <i style={{ fontSize: 25 }} className="fa fa-linkedin"></i>
              </a>
              <a href="/" style={{ textDecoration: "none" }}>
                <i style={{ fontSize: 25 }} className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
