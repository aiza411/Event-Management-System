import "../cssFiles/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footerContent">
          <div className="column">
            <h2 className="footerHeading zigzag">About Dawat</h2>
            <p className="AboutText">
              DAWAT is an Event Management, Catering, Photography and PR company
              located in Pakistan, which specializes in
                weddings, parties, corporate events
              and much more. Dawat uses its expertise to create powerful
              impressions, to make your event leave a lasting impression.
            </p>
          </div>

          <div className="column">
            <h2 className="footerHeading zigzag">Recent Posts</h2>
            <ul className="PostsText">
              <li>
                <a href="/" style={{textDecoration: 'none'}}>
                  Bring back the Concerts
                </a>
              </li>
              <li>
                <a href="/" style={{textDecoration: 'none'}}>
                  Celebrating Singles
                </a>
              </li>
              <li>
                <a href="/" style={{textDecoration: 'none'}}>
                  Designers that reigned this season
                </a>
              </li>
              <li>
                <a href="/" style={{textDecoration: 'none'}}>
                  Interactive Birthdays
                </a>
              </li>
            </ul>
          </div>

          <div className="column">
            <h2 className="footerHeading zigzag">Contact Us</h2>
            <div className="ContactInfo">
              <p>
                <i
                  className="fa fa-map-marker"
                  style={{marginRight:10, marginBottom: 10}}
                ></i>
                14C, 3rd Floor, Lane-9, Islamabad, Pakistan
              </p>
              <p>
                <i
                  className="fa fa-phone"
                  style={{marginRight:10, marginBottom: 10}}
                ></i>
                0322 7888061, 0335 7888062
              </p>
              <p>
                <i
                  className="fa fa-envelope"
                  style={{marginRight:10, marginBottom: 10}}
                ></i>
                info@dawatpk.com
              </p>
            </div>
          </div>
        </div>

         <div className="belowFooter">
          <p id="copyright">© Copyright 2022 Dawat Pakistan</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
