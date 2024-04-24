import React from "react";
import '../cssFiles/servicesstyle.css'
import '../cssFiles/home.css'
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function Services() {

  return(
      <>
          <Navbar/>
          <>
              <img src={require("../assets/Images/Services/services0.jpeg")}/>
              <div /*className="content"*/>
                  <h1>Our Services</h1>
                  <h4 style={{textAlign: "center"}}>
                  Dawat is a full fledged Event Management company with a wide spectrum of services to provide you
                      one window solution.
                  </h4>

                  <div className="services-list">
                      <div className="services-list-child">
                          <ul>
                              <li>Full Event Services</li>
                              <li>Decor Services</li>
                              <li>Event Managment</li>
                              <li>Dance Floors</li>
                              <li>Food & Catering</li>
                              <li>Card Printing</li>
                          </ul>
                      </div>

                      <div className="services-list-child">
                          <ul>
                              <li>Photography</li>
                              <li>Makeup</li>
                              <li>Security</li>
                              <li>Light & Sound</li>
                              <li>P.R. Events</li>
                              <li>DJ - Disk Jokey</li>
                          </ul>
                      </div>

                      <div className="services-list-child">
                          <ul>
                              <li>Wedding Entrances</li>
                              <li>Floral & Stages</li>
                              <li>Destination Weddings</li>
                              <li>Bridal Shower</li>
                              <li>Birthdays</li>
                              <li>Corporate Events</li>
                          </ul>
                      </div>

                  </div>

                  <div className="services-details">
                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/fullEvent.jpg")}/>
                          <h5>EVENTS FULL SERVICE</h5>
                          <p>We provide full services for all your events, Shaadi, Valima, Mayun, Dholki, Mehndis, Corporate Events, Dinners, Birthdays, Baby showers etc.</p>
                          <p>Please contact our Event Managers for further details.</p>
                          <br></br>
                      </div>

                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/decor.jpg")}/>
                          <h5>DECOR SERVICES</h5>
                          <p>We provide rental services such as marquee/tent, furniture, LED lights etc. Decor services are available as well.</p>
                          <p>Please contact our Event Managers for further details.</p>
                      </div>

                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/eventManagment.jpg")}/>
                          <h5>EVENT MANAGMENT</h5>
                          <p>Our Event Managers can help make your dreams become reality,</p>
                          <p>Please contact for further details.</p>
                          <br></br>
                          <br></br>
                          <br></br>
                      </div>
                  </div>

                  <div className="services-details">
                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/danceFloors.jpg")}/>
                          <h5>DANCE FLOORS</h5>
                          <p>We have following options for you in Dance floors:</p>
                          <p>• Acrylic • Panaflex • LED</p>
                          <p>For the right choice of floor please contact our Event managers.</p>
                      </div>

                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/foodCatering.jpg")}/>
                          <h5>FOOD & CATERING</h5>
                          <p>We provide catering for all sorts of events. The gathering should not be less than 50
                              people.</p>
                          <p>To select a perfect menu for your event please visit the Menu section for details.</p>
                      </div>

                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/cardPrinting.jpg")}/>
                          <h5>CARD PRINTING</h5>
                          <p>We provide card printing services as well.</p>
                          <p>Please make your booking with us four months in advance.</p>
                          <br></br>
                          <br></br>
                      </div>
                  </div>

                  <div className="services-details">
                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/photography.jpg")}/>
                          <h5>PHOTOGRAPHY</h5>
                          <p>• O’ Shoot – Mutahir Mahmood
                              • Studio9 – Nusrat Jamal
                              • Lighthouse Photography – Ali Khurshid
                              • Fatima Tariq Photography
                              • Kashif Dossani Photography
                          </p>
                          <p>Please contact our Event Managers for further details.</p>
                      </div>

                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/makeup.jpg")}/>
                          <h5>MAKEUP</h5>
                          <p>• Omayr Waqar
                              • Nabilas
                              • Natasha Salon
                              • Shamain Salon
                              • Anam Falak
                          </p>
                          <p>Please contact our Event Managers for further details.</p>
                      </div>

                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/security.jpg")}/>
                          <h5>SECURITY</h5>
                          <p>We provide private security services in association with SGS security, which is one of
                              the leading security companies providing services for over a decade. Services include
                              wide range of Guarding Services, Technical Security Solutions etc. Please contact for
                              further details.</p>
                            <br></br>
                      </div>
                  </div>

                  <div className="services-details">
                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/lightSound.jpg")}/>
                          <h5>LIGHT
                              & SOUND</h5>
                          <p>• Theatre Lighting
                              • 3D Projection
                              • LED Lighting
                              • Par Can Lights
                              • Walkway Lamps
                              • General Lighting
                              • Concert Lighting
                              • Fairy Lights
                              • Chandeliers</p>
                      </div>

                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/prEvent.jpg")}/>
                          <h5>P.R.
                              EVENTS</h5>
                          <p>We function as a full business partner to our clients, providing PR consulting and
                              integrated marketing services that build brand reputation and offer real solutions
                              to business challenges.</p>
                              <br>
                              </br>
                      </div>

                      <div className="services-details-child">
                          <img src={require("../assets/Images/Services/dj.jpg")}/>
                          <h5>DISK
                              JOKEY - DJ</h5>
                          <p>For the right choice of DJ for your musical event, please contact our Event manager.</p>
                      </div>
                  </div>

              </div>

              <div className="call_for_action center">
                  <p style={{width: "600px", textAlign: "center"}} className="call_for_action_txt">Contact our Event Managers for more details.</p>
                  <button className="button">Contact Us
                      <i className="fas fa-angle-double-right"></i>
                  </button>
              </div>

          </>
          <Footer/>
          <BackToTop/>
      </>
  );
}

