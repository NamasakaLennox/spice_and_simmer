import React from "react";
import logo from "../Assets/logo_full.png";
import "./Footer.css";
// import { Link } from "react-router-dom";

export const Footer = () => {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  return (
    <footer className="footer">
      <div>
        <div className="footer__addr">
          <div className="footer-img">
            <img src={logo} alt="" />
          </div>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            {/* <h2 className="nav__title">Social</h2> */}
            <ul className="nav__ul">
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Reddit
                </a>
              </li>
            </ul>
          </li>

          {/* <li className="nav__item">
            <h2 className="nav__title">Pages</h2>
            <ul className="nav__ul">
              <li>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/search"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/favourites"
                >
                  Favourites
                </Link>
              </li>
            </ul>
          </li> */}
        </ul>
        <div className="legal">
          <p>&copy;{year} Spice & Simmer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
