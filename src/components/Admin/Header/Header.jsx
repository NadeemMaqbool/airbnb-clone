import "./Header.css"
import logo from '../../../assets/funpedia.png'
import { useAuthContext } from "../../../hooks/useAuthContext"
import { useSignout } from "../../../hooks/useSignout"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const {user, dispatch} = useAuthContext()
  
  const email = JSON.parse(user).email
  const {Logout} = useSignout()
  const navigate = useNavigate()

  const handleLogout = () => {
    Logout()
    navigate("/signin")    
  }
  return (
    <div className="header-admin">
        <div className="header-nav">
            <img src={logo} alt="Admin Logo" className="logo"/>
        </div>
        <div className="header-nav settings">
          <div className="setting-item">{email}</div>
          <button className="setting-item button" onClick={() => handleLogout()}>Logout</button>
        </div>
    </div>
  )
}

export default Header
