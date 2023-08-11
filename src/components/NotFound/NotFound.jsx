import { NavLink } from 'react-router-dom'
import notFound from "../../assets/404.jpg"
import './notFound.css'

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='img-cont'>
        <img src={notFound} alt='notFound' className="img-not-found" />
      </div>
      <div className='redirect'>
        <h3> The page you are looking for is not found</h3>
        <NavLink to="/admin" className="btn"> Dashboard </NavLink>
      </div>
    </div>

)}

export default NotFound
