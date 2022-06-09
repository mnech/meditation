import "./navbar.scss";

function Navbar() {
  const openMenu = () => {
    const d = 1;
  };

  return (
    <div className="navbar">
      <button
        type="button"
        className="navbar__hamburger"
        aria-label="menu"
        onClick={openMenu}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}

export default Navbar;
