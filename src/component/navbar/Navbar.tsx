import Searchbar from "component/searchbar/Searchbar";
import React, { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const onBurger = () => {
    setNav(() => !nav);
    const navbarMenu = document.querySelector(".navbar-menu");
    const navbarBurger = document.querySelector(".navbar-burger");
    if (navbarMenu !== null) {
      navbarMenu.classList.toggle("is-active");
    }
    if (navbarBurger !== null) {
      navbarBurger.classList.toggle("is-active");
    }
  };
  return (
    <div className="navSearchContainer">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
              alt="123"
            />
          </a>

          <button
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={onBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Home</a>

            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Searchbar />
    </div>
  );
}
