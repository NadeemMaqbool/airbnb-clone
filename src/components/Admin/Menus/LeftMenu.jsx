import { SpaceCompactItemContext } from "antd/es/space/Compact"
import "./LeftMenu.css"
import {FiUsers} from "react-icons/fi"
import {FiKey} from "react-icons/fi"
import {FiHome} from "react-icons/fi"
import {FaChartSimple} from "react-icons/fa6"
import {NavLink} from "react-router-dom"



const LeftMenu = () => {
  return (
    <div className="container-menu">
      <ul className="menu-items dashboard-nav">
        <li className="list-item">
        <FaChartSimple />
          <span className="list-item-text">
            <NavLink to="/admin/" className="link"> Dashboard </NavLink> 
          </span>
        </li>
      </ul>
      <ul className="menu-items">
        
        <li className="list-item">
          <FiUsers />
          <span className="list-item-text">
            <NavLink to="/admin/users" className="link"> Users </NavLink> 
          </span>
        </li>
        <li className="list-item">
          <FiKey />
           <span className="list-item-text">
           <NavLink to="/admin/rooms" className="link">Rooms</NavLink>
           </span>
        </li>
        <li className="list-item">
          <FiHome />
          <span className="list-item-text">
            <NavLink to="/admin/hotels" className="link"> Hotels </NavLink>
            </span>
        </li>
      </ul>
    </div>
  )
}

export default LeftMenu
