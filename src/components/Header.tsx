import React, { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import Switch from "./Switch";
import { CurrentPageContext } from "../context/linkRefContext.ts";

function Header() {
  const location = useLocation();
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const headerMenuRef = React.useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(window.scrollY);

  const [visible, setVisible] = useState(true);
  const allLinkRefs = {
    home: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    services: useRef(null),
    contact: useRef(null),
    blog: useRef(null),
  };

  // Update current page based on location
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setCurrentPage("home");
    } else if (path === "/projects") {
      setCurrentPage("projects");
    } else if (path === "/about") {
      setCurrentPage("about");
    } else if (path === "/services") {
      setCurrentPage("services");
    } else if (path === "/contact") {
      setCurrentPage("contact");
    } else if (path === "/blog") {
      setCurrentPage("blog");
    }
  }, [location.pathname, setCurrentPage]);

  const toggleMenu = () => {
    if (headerMenuRef.current) {
      headerMenuRef.current.classList.toggle("clicked");
    }
  };

  // const deactivatePreviousActiveLink = (): void => {
  //   console.log(previousActiveLink.current);
  // };

  useEffect(() => {
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
            <abbr
              className="logo"
              title="Daniel Olatunde"
              style={{ textDecoration: "none" }}
            >
              Daniel
            </abbr>
          </Link>
        </h2>

        <nav>
          <ul>
            <li>
              <Link
                ref={allLinkRefs.home}
                className={currentPage === "home" ? "active" : ""}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                ref={allLinkRefs.projects}
                className={currentPage === "projects" ? "active" : ""}
                to="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={currentPage === "about" ? "active" : ""}
                ref={allLinkRefs.about}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={currentPage === "services" ? "active" : ""}
                ref={allLinkRefs.services}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={currentPage === "contact" ? "active" : ""}
                ref={allLinkRefs.contact}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={currentPage === "blog" ? "active" : ""}
                ref={allLinkRefs.blog}
                to="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Switch />
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
