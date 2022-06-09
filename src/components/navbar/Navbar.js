import PropTypes, { bool } from "prop-types";

import "./navbar.scss";

function Navbar({ activeSidebar, setActiveSidebar }) {
  const openMenu = () => {
    setActiveSidebar((active) => !active);
  };

  const classes = activeSidebar
    ? "navbar__hamburger active"
    : "navbar__hamburger";

  return (
    <nav className="navbar">
      <button
        type="button"
        className={classes}
        aria-label="menu"
        onClick={openMenu}
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  activeSidebar: bool,
  setActiveSidebar: PropTypes.func,
};

Navbar.defaultProps = {
  activeSidebar: false,
  setActiveSidebar: () => {},
};

export default Navbar;
