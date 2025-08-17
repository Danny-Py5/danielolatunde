import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function Header() {
  const headerMenuRef = React.useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(window.scrollY);

  const [visible, setVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const allLinkRefs = {
    home: useRef(null),
    projects: useRef(null),
    about: useRef(null),
    services: useRef(null),
    contact: useRef(null),
    blog: useRef(null),
  };
  let previousActiveLink = useRef(null);

  const toggleMenu = () => {
    if (headerMenuRef.current) {
      headerMenuRef.current.classList.toggle("clicked");
    }
  };

  const deactivatePreviousActiveLink = (): void => {};

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
            <abbr title="Daniel Olatunde" style={{ textDecoration: "none" }}>
              Daniel
            </abbr>
          </Link>
        </h2>

        <nav>
          <ul>
            <li>
              <Link
                ref={allLinkRefs.home}
                className={`${activeLink == "home" ? "active" : ""} `}
                onClick={() => {
                  deactivatePreviousActiveLink();
                  setActiveLink(() => {
                    previousActiveLink = allLinkRefs.home;
                    return "home";
                  });
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                ref={allLinkRefs.projects}
                className={`${activeLink == "projects" ? "active" : ""} `}
                to="/projects"
                onClick={() => {
                  deactivatePreviousActiveLink();
                  setActiveLink(() => {
                    previousActiveLink = allLinkRefs.projects;
                    return "projects";
                  });
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={`${activeLink == "about" ? "active" : ""} `}
                onClick={() => {
                  deactivatePreviousActiveLink();
                  setActiveLink(() => {
                    previousActiveLink = allLinkRefs.about;
                    return "about";
                  });
                }}
                ref={allLinkRefs.about}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${activeLink == "services" ? "active" : ""} `}
                onClick={() => {
                  deactivatePreviousActiveLink();
                  setActiveLink(() => {
                    previousActiveLink = allLinkRefs.services;
                    return "services";
                  });
                }}
                ref={allLinkRefs.services}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`${activeLink == "contact" ? "active" : ""} `}
                onClick={() => {
                  deactivatePreviousActiveLink();
                  setActiveLink(() => {
                    previousActiveLink = allLinkRefs.contact;
                    return "contact";
                  });
                }}
                ref={allLinkRefs.contact}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className={`${activeLink == "blog" ? "active" : ""} `}
                onClick={() => {
                  deactivatePreviousActiveLink();
                  setActiveLink(() => {
                    previousActiveLink = allLinkRefs.blog;
                    return "blog";
                  });
                }}
                ref={allLinkRefs.blog}
                to="/blog"
              >
                Blog
              </Link>
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
