import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h1 className="logo">meditation</h1>
      </div>
      <hr />
      <div className="sidebar__center">
        <ul>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
      <div className="sidebar__bottom">color options</div>
    </div>
  );
}

export default Sidebar;
