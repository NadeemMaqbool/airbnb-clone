import "./Header.css";
import logo from "../../assets/logo_fp.png";
import { Link } from "react-router-dom";

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
          <Link to="/properties" className="nav-group-item">List your property</Link>
          <Link to='/signin' className="nav-group-item" > Login </Link>
          <Link to='/signup' className="nav-group-item"> Register </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
