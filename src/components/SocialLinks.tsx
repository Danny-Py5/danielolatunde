import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons"; // X (formerly Twitter)
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <a
        className="  social-link"
        href="https://github.com/Danny-Py5"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        className=" social-link"
        href="https://x.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="https://x.com/DanielOlat7426"
      >
        <FontAwesomeIcon icon={faXTwitter} size="2x" />
      </a>
      <a
        className=" social-link"
        href="https://web.facebook.com/dhanyhella.fhathokun"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        className=" social-link"
        href="https://www.tiktok.com/@dannikeyx?lang=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
      >
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      <a
        className=" social-link"
        href="https://www.linkedin.com/in/daniel-olatunde-64aa59306/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
}

export default SocialLinks;
