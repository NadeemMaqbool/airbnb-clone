import {Outlet} from 'react-router-dom'
import Content from "../components/partials/Content"

const PublicLayout = () => {
  return (
    <div className="container">
        <Content></Content>
        
        <Outlet />
  </div>
  )
}

export default PublicLayout
