/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/DarkModeContext";

import "./sidebar.scss";
import "./sidebarMedia.scss";

import logo from "../../resources/icons/logo.png";
import userIcon from "../../resources/icons/sidebar/user.svg";
import studyIcon from "../../resources/icons/sidebar/study.svg";
import timerIcon from "../../resources/icons/sidebar/timer.svg";
import logoutIcon from "../../resources/icons/sidebar/logout.svg";
import sunIcon from "../../resources/icons/mode/sun.svg";
import moonIcon from "../../resources/icons/mode/moon.svg";

function Sidebar({ activeSidebar, setActiveSidebar }) {
  const { dispatch } = useContext(AuthContext);
  const { darkMode, dispatchDarkMode } = useContext(DarkModeContext);

  const logout = () => {
    localStorage.setItem("user", null);
    dispatch({ type: "LOGOUT" });
  };

  const toggleDarkMode = () => {
    dispatchDarkMode({ type: "TOGGLE" });
  };

  const close = () => {
    setActiveSidebar(false);
  };

  const clickContent = (e) => {
    e.stopPropagation();
  };

  const classes = activeSidebar ? "sidebar active" : "sidebar";

  return (
    <div className={classes} onClick={close}>
      <div className="sidebar__content" onClick={clickContent}>
        <div className="sidebar__top">
          <Link to="/">
            <div className="logo">
              <h1 className="logo__title">meditation</h1>
              <img src={logo} alt="Logo" className="logo__img" />
            </div>
          </Link>
        </div>
        <hr />
        <div className="sidebar__center">
          <nav className="sidebar__menu">
            <ul>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#be483e" : "inherit",
                  })}
                  to="/"
                >
                  <img src={userIcon} alt="user" />
                  <span>Профиль</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#be483e" : "inherit",
                  })}
                  to="/lessons"
                >
                  <img src={studyIcon} alt="study" />
                  <span>Обучение</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#be483e" : "inherit",
                  })}
                  to="/timer"
                >
                  <img src={timerIcon} alt="timer" />
                  <span>Таймер</span>
                </NavLink>
              </li>
              <li>
                <button type="button" className="logout" onClick={logout}>
                  <img src={logoutIcon} alt="logout" />
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sidebar__bottom">
          <label htmlFor="switch" className="switch">
            <img src={sunIcon} alt="sun" />
            <input
              type="checkbox"
              id="switch"
              className="visually-hidden"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <span>Dark mode</span>
            <img src={moonIcon} alt="moon" />
          </label>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  activeSidebar: PropTypes.bool,
  setActiveSidebar: PropTypes.func,
};

Sidebar.defaultProps = {
  activeSidebar: false,
  setActiveSidebar: () => {},
};

export default Sidebar;
