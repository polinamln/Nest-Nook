import React from "react";
import css from "./Header.module.css";

export default function Header() {
  const [activeLink, setActiveLink] = React.useState("home");

  return (
    <div className="container">
      <nav className={css.nav}>
        <h1 className={css.logo}>
          Nest <span className={css.logoAccent}>&</span> Nook
        </h1>

        <ul className={css.headerNav}>
          <li>
            <a
              className={`${css.headerNavLink} ${
                activeLink === "home" ? css.headerNavLinkActive : ""
              }`}
              onClick={() => setActiveLink("home")}
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className={`${css.headerNavLink} ${
                activeLink === "about" ? css.headerNavLinkActive : ""
              }`}
              onClick={() => setActiveLink("about")}
              href="#"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              className={`${css.headerNavLink} ${
                activeLink === "services" ? css.headerNavLinkActive : ""
              }`}
              onClick={() => setActiveLink("services")}
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className={`${css.headerNavLink} ${
                activeLink === "ourTeam" ? css.headerNavLinkActive : ""
              }`}
              onClick={() => setActiveLink("ourTeam")}
              href="#"
            >
              Our team
            </a>
          </li>
        </ul>

        <button type="button" className={css.headerBtn}>
          Contact Us
        </button>
      </nav>
    </div>
  );
}
