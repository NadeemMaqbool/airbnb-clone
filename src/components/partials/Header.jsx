import "./Header.css";
import logo from "../../assets/logo_fp.png";

const Header = () => {
  return (
    <div className="h-container">
      <div className="header-container">
        <div className="main-logo">
          <a href="/">
            <img src={logo} alt="Funpedia" className="logo-container" />
          </a>
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
        <div className="main-settings">Sign In</div>
      </div>
    </div>
  );
};

export default Header;
