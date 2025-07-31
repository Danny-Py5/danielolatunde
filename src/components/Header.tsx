import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function Header() {
  const headerMenuRef = React.useRef<HTMLButtonElement>(null);

  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  const toggleMenu = () => {
    if (headerMenuRef.current) {
      headerMenuRef.current.classList.toggle("clicked");
    }
  };

  useEffect(() => {
    const links = document.querySelectorAll(".header nav ul li a");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });
    const headerMenu = headerMenuRef.current;
    if (headerMenu) {
      headerMenu.addEventListener("click", toggleMenu);
    }
    window.addEventListener("resize", () => {
      if (headerMenu) {
        headerMenu.classList.remove("clicked");
      }
    });
    // hide the menu on click outside
    document.addEventListener("click", (event) => {
      const target: HTMLElement = event.target as HTMLElement;
      if (headerMenu && !headerMenu.contains(target)) {
        headerMenu.classList.remove("clicked");
      }
    });
    // clean up function
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {
          links.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        });
      });
      if (headerMenu) {
        headerMenu.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Scrolling down, hide header
        setVisible(false);
      } else {
        // Scrolling up, show header
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`header ${visible ? "visible" : "hidden"}`} id="header">
      <div className="section-wrapper header__wrapper">
        <h2>
          <Link to="/">
            <abbr title="Daniel Olatunde" style={{ textDecoration: "none" }}>
              Daniel O.
            </abbr>
          </Link>
        </h2>

        <nav>
          <ul>
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <button
          style={{ cursor: "pointer" }}
          className="header__menu"
          ref={headerMenuRef}
        >
          <span className="header__menu-bar"></span>
          <span className="header__menu-bar"></span>
          <span className="header__menu-bar"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
