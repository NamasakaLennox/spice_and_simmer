import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

export const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
        <nav className="navbar">
          <ul className="header-list">
            <li>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
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
                to="/about"
              >
                About
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
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/login"
              >
                <button>Login</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="space">&nbsp;</div>
    </>
  );
};
