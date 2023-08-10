import "./Header.css";
//import logo from "../../assets/logo_fp.png";
import logo from "../../assets/funpedia-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSignout } from "../../hooks/useSignout";
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
  const {Logout}  = useSignout()
  const {user} = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    Logout()
    navigate("/signin")
  }
  return (
    <div className="h-container">
      <div className="header-container">
        <div className="main-logo">
          <a href="/">
            <img
              loading="lazy" 
              src={logo} 
              alt="Funpedia" 
              className="logo-container"
            />
          </a>
        </div>
        <div className="header-nav">
          {!user && ( <div>
              <Link to='/signin' className="nav-group-item" > Login </Link>
              <Link to='/signup' className="nav-group-item"> Register </Link>
            </div>
          )}
          {user && ( <div>
            <Link to="/properties" className="nav-group-item">List your property</Link>
              <button
              className="nav-group-item"
                onClick={() => handleLogout()}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
