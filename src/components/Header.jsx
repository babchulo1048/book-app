import React from "react";
import "../styles/header.css";
import SearchForm from "./SearchForm";
import Book from "./Book";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <div className="header-content flex flex-c flex-column text-white text-center">
          <h2 className="header-title text-capitalize">
            Find-Your Book Choice
          </h2>
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
            tellus vel ipsum eleifend suscipit. Integer justo nunc, dignissim ut
            purus vitae, tempor faucibus turpis.
          </p>
          <SearchForm />
        </div>
      </header>
      <Book />
    </div>
  );
};

export default Header;
