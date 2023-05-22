import "./Header.css";

const Header = () => {
  return (
    <div className="h-container">
      <div className="header-container">
        <div className="main-logo">
          <img src="#" alt="" />
          Funpedia Group
        </div>
        <div className="header-nav">
          <ul className="nav-group">
            <li className="nav-group-item">
              <a href="#">English</a>
            </li>
            <li className="nav-group-item">
              <a href="#">List your property</a>
            </li>
            <li className="nav-group-item">
              <a href="#">Trips</a>
            </li>
            <li className="nav-group-item">
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
        <div className="main-settings">Settings</div>
      </div>
    </div>
  );
};

export default Header;
