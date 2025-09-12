import { Link } from "react-router-dom";
import SocialLinks from "../../components/SocialLinks";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__wrapper section-wrapper">
        <div className="hero__content">
          {/* Hero Content Example */}
          <h1>Hello, I'm Daniel</h1>
          <p>
            Welcome to my space. I'm a passionate website developer, Software
            developer and graphic designer.
          </p>
          <SocialLinks />
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
              alt="A pickture of Daniel"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
