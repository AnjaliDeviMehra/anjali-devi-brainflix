import React from "react";
import BrainFlixLogo from "../../assets/logo/BrainFlixLogo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import "../../styles/partials/global.scss";
import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <section className="nav">
        <img src={BrainFlixLogo} className="nav__logo" alt="brainflix-logo" />
        <div className="nav__form-container">
          <form className="nav__search">
            <input
              type="search"
              placeholder="Search"
              className="nav__search-input"
            />
            <img src={search} className="nav__search-icon" />
          </form>
          <img src={mohan} className="nav__mohan-image" />
          <button className="button">
            <img src={upload} className="button__icon" />
            UPLOAD
          </button>
        </div>
      </section>
    </>
  );
}

export default Navbar;
