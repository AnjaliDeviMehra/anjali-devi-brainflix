import React from "react";
import BrainFlixLogo from "../../assets/logo/BrainFlixLogo.svg";
import search from "../../assets/icons/search.svg";
import upload from "../../assets/icons/upload.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import "../../styles/partials/global.scss";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <section className="nav">
        <NavLink to="/">
          <img src={BrainFlixLogo} className="nav__logo" alt="brainflix-logo" />
        </NavLink>
        <div className="nav__form-container">
          <form className="nav__search">
            <input
              type="search"
              name="search"
              id="serach"
              placeholder="Search"
              className="nav__search-input"
            />
            <img src={search} className="nav__search-icon" alt="search icon" />
          </form>
          <img src={mohan} className="nav__user-image" alt="user image" />

          <NavLink to="/upload" className="nav__button">
            <img src={upload} className="nav__upload-icon" alt="upload icon" />
            UPLOAD
          </NavLink>
        </div>
      </section>
    </>
  );
}

export default Nav;
