import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"; // X (formerly Twitter)
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__wrapper section-wrapper">
        <div className="hero__content">
          {/* Hero Content Example */}
          <h1>Hello, I'm Danny</h1>
          <p>
            Welcome to my space. I'm a passionate website developer and graphic
            designer.
          </p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <a
              className="hero__social-link"
              href="https://github.com/Danny-Py5"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              className="hero__social-link"
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="https://x.com/DanielOlat7426"
            >
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
            <a
              className="hero__social-link"
              href="https://web.facebook.com/dhanyhella.fhathokun"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              className="hero__social-link"
              href="https://www.tiktok.com/@dannikeyx?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a
              className="hero__social-link"
              href="https://www.linkedin.com/in/daniel-olatunde-64aa59306/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <div
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            className="cta-cont"
          >
            <Link to="/contact" className="hero__cta">
              Hire Me
            </Link>
            <Link to="/projects" className="hero__cta hero__cta--secondary">
              View My Work
            </Link>
          </div>
        </div>

        <div className="hero__image">
          <figure>
            <img
              width={300}
              src="/IMG_20250216_105833_585.webp"
              alt="A pickture of Danny"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
