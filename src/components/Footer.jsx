import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-light">
      <div className="container pb-0">
        <section>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6
                className="text-uppercase mb-2 font-weight-bold"
                style={{ fontSize: "1rem" }}
              >
                PUBGM Wiki & Strat
              </h6>
              <p style={{ fontSize: "0.8rem" }}>
                Welcome all PUBGM enthusiasts to post and discuss their ideas on
                this website
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6
                className="text-uppercase mb-2 font-weight-bold"
                style={{ fontSize: "1rem" }}
              >
                Contact
              </h6>
              <p style={{ fontSize: "0.8rem" }}>
                <FontAwesomeIcon className="mr-2" icon={faHome} /> New York, NY
                11201, US
              </p>
              <p style={{ fontSize: "0.8rem" }}>
                <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                michaelchen12138@gmail.com
              </p>
              <p style={{ fontSize: "0.8rem" }}>
                <FontAwesomeIcon className="mr-2" icon={faPhone} /> +1 (561)
                990-9976
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6
                className="text-uppercase mb-2 font-weight-bold"
                style={{ fontSize: "1rem" }}
              >
                Follow us
              </h6>
              <a
                className="btn btn-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                className="btn btn-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                className="btn btn-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                className="btn btn-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                className="btn btn-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                className="btn btn-dark btn-floating m-1"
                href="#!"
                role="button"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* <div
        className="text-center p-2"
        style={{ backgroundColor: "#1f1f1f", fontSize: "0.8rem" }}
      >
        © 2023 Copyright:
        <a className="text-muted" href="#">
          {" "}
          TBDxxxxxx.com{" "}
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
