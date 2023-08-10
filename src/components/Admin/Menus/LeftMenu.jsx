import { SpaceCompactItemContext } from "antd/es/space/Compact"
import "./LeftMenu.css"
import {FiUsers} from "react-icons/fi"
import {FiKey} from "react-icons/fi"
import {FiHome} from "react-icons/fi"

const LeftMenu = () => {
  return (
    <div className="container-menu">
      <ul className="menu-items">
        <li className="list-item">
          <FiUsers />
          <span className="list-item-text">Users</span>
        </li>
        <li className="list-item">
          <FiKey />
          <span className="list-item-text">Rooms</span>
        </li>
        <li className="list-item">
          <FiHome />
          <span className="list-item-text">Hotels</span>
        </li>
      </ul>
    </div>
  )
}

export default LeftMenu
