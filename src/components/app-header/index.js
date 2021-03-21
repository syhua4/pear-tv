import React, { Fragment, memo } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { getLogoutAction } from "@/pages/auth/store/actionCreators";

import { HeaderWrapper } from "./style";
import logo from "@/assets/image/logo.png";
import user_avatar from "@/assets/image/user_avatar.png";
import default_avatar from "@/assets/image/default_avatar.png";

import SearchBox from "@/components/search-box";
import { useDispatch, useSelector } from "react-redux";

export default memo(function AppHeader() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLogin, userProfile } = useSelector((state) => ({
    isLogin: state.getIn(["user", "isLogin"]),
    userProfile: state.getIn(["user", "userProfile"]),
  }));

  const handleLogout = () => {
    dispatch(getLogoutAction()).then(() => history.push("/"));
  };

  const showUserMenu = () => {
    if (isLogin) {
      return <li onClick={(e) => handleLogout()}>Logout</li>;
    } else {
      return (
        <Fragment>
          <li onClick={(e) => history.push("/login")}>Login</li>
          <li onClick={(e) => history.push("/register")}>Register</li>
        </Fragment>
      );
    }
  };
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
              <NavLink to="/rankings" className="nav-link">
                Rankings
              </NavLink>
            </div>
          </div>
          <SearchBox />
          <div className="user-avatar d-flex align-items-center">
            <img
              src={isLogin ? user_avatar : default_avatar}
              alt="user avatar"
              onClick={() => {
                isLogin
                  ? history.push(`/user/${userProfile.id}`)
                  : history.push("/login");
              }}
            />
            <span className="caret" />
            <ul className="user-avatar-dropdown">{showUserMenu()}</ul>
          </div>
        </div>
      </nav>
    </HeaderWrapper>
  );
});
