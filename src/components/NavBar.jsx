import React, { useState } from "react";
import "../styles/navbar.css";
import LOGO from "../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="navbar container">
      <div className="navbar-content flex">
        <div className="brand-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img src={LOGO} className="logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1">chuloBook</span>
          </Link>
          <button onClick={handleToggle} className="nav-toggler-btn">
            <HiOutlineMenuAlt3
              size={35}
              color={toggleMenu ? "#fff" : "#010101"}
            />
          </button>
        </div>
        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                to="/book"
                color="#fff"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-uppercase  fs-22 fw-6 ls-1"
                to="/about"
              >
                About
              </Link>
              <Link
                className="nav-link text-uppercase  fs-22 fw-6 ls-1"
                to="/favorite"
              >
                MyFavorites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
