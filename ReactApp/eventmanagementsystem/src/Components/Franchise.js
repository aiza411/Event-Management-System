import "../cssFiles/franchise.css";
import "../cssFiles/home.css";
import { useState } from "react";

function Franchise() {
  const onClickSubmitBtn = () => {
    console.log("Submit btn is clicked");

    setName(fname);
    setEmail(email);
    setPhno(phno);
    setLocation(location);
    setcompanyName(companyName);
    setIntro(intro);
    console.log("fname :", fname);
    console.log("email :", email);
  };

  const handleOnChange = (event) => {
    console.log("OnChange");
    const { name, value } = event.target;
    console.log("Name:", name, "Value:", value); 

    switch (name) {
      case "firstname":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phoneno":
        setPhno(value);
        break;
      case "company":
        setcompanyName(value);
        break;
      case "location":
        setLocation(value);
        break;
      case "intro":
        setLocation(value);
        break;
      default:
        break;
    }
  };

  const [fname, setName] = useState("Enter Your Name");
  const [email, setEmail] = useState("Enter Your Email");
  const [phno, setPhno] = useState("Enter Your Phone no");
  const [companyName, setcompanyName] = useState("Enter Your Company Name");
  const [location, setLocation] = useState(
    "Enter Your Location (Country & City)"
  );
  const [intro, setIntro] = useState("Few lines about Yourself");

  return (
    <>
      <main>
        <div className="franchise_top">
          <h1
            className="zigzagline"
            style={{ color: "#ffffff", textAlign: "center" }}
          >
            Franchise
          </h1>
        </div>

        <div className="business_franchise">
          <h1>Business Franchise</h1>
          <p>
            Dawat is a unique event management brand that is operating from
            Pakistan, with a specialization in weddings, parties, corporate
            events and much more. Come and join our strong international family!
            This is your opportunity to become part of the Dawat family and
            experience the power of a big, well-established brand. Leverage our
            international event management experience to capitalize on market
            development opportunities.
          </p>
          <p>
            We need highly motivated franchisees to help expand our brand into
            new geographies. We are glad you have taken the time to learn more
            about Dawat franchise opportunities and hope you will consider
            joining our family. The requirements for a candidate to become a
            Franchise Partner may vary somewhat depending on your location.
            However, the type of franchise partner we are looking for is always
            the same.
          </p>
          <hr
            style={{
              display: "inline-block",
              height: 1,
              width: "25%",
              margin: 30,
              textAlign: "center",
            }}
          />

          <h3>Our Perfect Partner is:</h3>
          <ul>
            <li>Passionate about their work</li>
            <li>
              Understands that success comes from putting the customer first
            </li>
            <li>Ambitious and has the vision and desire to succeed</li>
          </ul>
        </div>

        <div className="success">
          <h2>Your success will be guaranteed by:</h2>

          <div className="success_row">
            <div className="success_col">
              <h3 className="zigzagline2">The Brand</h3>
              <p>
                The revocable right to use our trademarks and logos at the
                agreed upon location.
              </p>
            </div>

            <div className="success_col">
              <h3 className="zigzagline2">Marketing Materials</h3>
              <p>
                The website according to our international standards, designs
                for all types of ad campaigns online and offline, content for
                your social networks, the right to use the impressive Dawat
                portfolio of events.
              </p>
            </div>

            <div className="success_col">
              <h3 className="zigzagline2">Formalized Processes</h3>
              <p>
                You can leverage on fool-proof event management processes that
                make each Dawat wedding and event a success. It took us five
                years to come to this level, and we still fine-tune them with
                each event.
              </p>
            </div>
          </div>

          <div className="success_row">
            <div className="success_col">
              <h3 className="zigzagline2">Training</h3>
              <p>
                You and your team will attend a 7-day training session in
                Pakistan.
              </p>
            </div>

            <div className="success_col">
              <h3 className="zigzagline2">Support</h3>
              <p>
                Our international family is always available to help you out of
                any problems you are facing. Leverage on the business experience
                gained by Dawat in Pakistan other countries. Get assistance in
                designing, producing and coordinating large events from your
                counterparts in other countries.
              </p>
            </div>

            <div className="success_col">
              <h3 className="zigzagline2">Cooperation</h3>
              <p>
                Destination weddings and events are at the core of Dawat
                business. Get client referrals for events that will take place
                in your location and produce them in cooperation with the
                referral company. Refer clients desiring to have an event in
                another Dawat location, be their local planning contact and earn
                your fee. Together we can do more.
              </p>
            </div>
          </div>

          <p className="success_text">
            For this privilege, you will be expected to pay an initial fee
            depending on the business location, as well as a monthly royalty fee
            and an ongoing marketing contribution – both of which are based on
            the company’s gross sales.
          </p>
        </div>

        <div className="call_for_action center">
          <p
            className="call_for_action_txt"
            style={{ padding: "25%", textAlign: "center" }}
          >
            {" "}
            Ready to join our successful family and build the business of your
            dreams?
          </p>
        </div>

        <div className="about_yourself">
          <h2>Tell us about Yourself</h2>
          <div className="intro_form">
            <form action="" autoComplete="on">
              <label htmlFor="fname">Your Name (required)</label>
              <br />
              <input
                type="text"
                value={fname}
                id="fname"
                name="firstname"
                onChange={handleOnChange}
                onClick={()=>{
                    setName("");
                }}
              />

              <br />
              <label htmlFor="email">Your Email (required)</label>
              <br />
              <input
                type="text"
                value={email}
                id="email"
                name="email"
                onChange={handleOnChange}
                onClick={()=>{
                    setEmail("");
                }}
              />

              <br />
              <label htmlFor="phno">Your Phone Number (required)</label>
              <br />
              <input
                type="text"
                value={phno}
                id="phno"
                name="phoneno"
                onChange={handleOnChange}
                onClick={()=>{
                    setPhno("");
                }}
              />

              <br />
              <label htmlFor="company">Company Name</label>
              <br />
              <input
                type="text"
                value={companyName}
                id="company"
                name="company"
                onChange={handleOnChange}
                onClick={()=>{
                    setcompanyName("");
                }}
              />

              <br />
              <label htmlFor="location">Location (Country & City)</label>
              <br />
              <input
                type="text"
                value={location}
                id="location"
                name="location"
                onChange={handleOnChange}
                onClick={()=>{
                    setLocation("");
                }}
              />

              <br />
              <label htmlFor="intro">Few lines about Yourself</label>
              <br />
              <textarea
                id="intro"
                value={intro}
                name="intro"
                rows="10"
                cols="100"
                onChange={(e) => {
                  setIntro(e.target.value);
                }}
                onClick={()=>{
                    setIntro("");
                }}
              ></textarea>

              <br />

              <input
                className="button3"
                type="submit"
                value="Submit"
                style={{ width: 100 }}
                onClick={onClickSubmitBtn}
              />
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Franchise;
