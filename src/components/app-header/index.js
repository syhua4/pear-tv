import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { HeaderWrapper } from "./style";
import logo from "@/assets/image/logo.png";
import avatar from "@/assets/image/default_avatar.png";

export default memo(function AppHeader() {
  return (
    <HeaderWrapper>
      <nav className="header-inner fixed-top navbar navbar-expand-lg">
        <div className="nav-items wrap-v2">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" height="80" width="109" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink to="/" className="nav-link" exact>
                Discover
              </NavLink>
              <NavLink to="/movies" className="nav-link">
                Movies
              </NavLink>
              <NavLink to="/tvs" className="nav-link">
                Tv Show
              </NavLink>
              <NavLink to="/rankings" className="nav-link">
                Rankings
              </NavLink>
            </div>
          </div>
          <form className="d-flex align-items-center search-form">
            <input
              className="input-search"
              type="search"
              placeholder="Search movies/tv shows"
              aria-label="Search"
            />
            <input type="submit" value="" className="input-search-btn" />
          </form>
          <div className="user-avatar d-flex align-items-center">
            <img src={avatar} alt="user avatar" />
            <span className="caret"></span>
            <ul className="user-avatar-dropdown">
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>
        </div>
      </nav>
    </HeaderWrapper>
  );
});
