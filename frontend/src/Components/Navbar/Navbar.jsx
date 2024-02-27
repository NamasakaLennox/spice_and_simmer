import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <header className="header">
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/"
          onClick={() => {
            setMenu("home");
          }}
        >
          <img src={logo} alt="" className="logo" />
        </Link>
        <nav className="navbar">
          <ul className="header-list">
            <li
              onClick={() => {
                setMenu("home");
              }}
            >
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                Home
              </Link>
              {menu === "home" ? <hr /> : <></>}
            </li>
            <li
              onClick={() => {
                setMenu("search");
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/search"
              >
                Search
              </Link>
              {menu === "search" ? <hr /> : <></>}
            </li>
            {/* <li
              onClick={() => {
                setMenu("about");
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/about"
              >
                About
              </Link>
              {menu === "about" ? <hr /> : <></>}
            </li> */}
            <li
              onClick={() => {
                setMenu("favourites");
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/favourites"
              >
                Favourites
              </Link>
              {menu === "favourites" ? <hr /> : <></>}
            </li>
            <li className="login-button">
              {localStorage.getItem("x-access-token") ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("x-access-token");
                    localStorage.removeItem("user_id");
                    window.location.replace("/");
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/login"
                >
                  <button>Login</button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
      <div className="space">&nbsp;</div>
    </>
  );
};
