import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks"; // import React, { useContext } from "react";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer__section-wrapper section-wrapper padding-top-2rem">
        <div className="footer__about">
          <h3>Daniel</h3>
          <p className="margin-bottom-2rem">
            I’m a website and software developer passionate about building
            innovative and practical solutions. Beyond programming, I design
            eye-catching visuals that stand out. I enjoy turning ideas into
            functional products—let’s create something amazing together.
          </p>
          <SocialLinks />
        </div>
        <QuickLinks />

        <div className="footer__let-connect">
          <h3>Let's Connect</h3>

          <ul>
            {/* Gmail */}
            <li>
              <a
                style={{ whiteSpace: "nowrap" }}
                href="mailto:olatundedaniel943@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Gmail"
              >
                <FontAwesomeIcon icon={faEnvelope} size="1x" />{" "}
                olatundedaniel943@gmail.com
              </a>
            </li>

            {/* Phone */}
            <li>
              <a href="tel:+2348165521344" aria-label="Phone">
                <FontAwesomeIcon icon={faPhone} size="1x" /> +2348165521344
              </a>
            </li>

            {/* Location */}
            <li>
              <a
                href="https://www.google.com/maps/place/Ondo,+Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Location"
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />{" "}
                <address style={{ display: "inline" }}>Ondo, Nigeria</address>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
