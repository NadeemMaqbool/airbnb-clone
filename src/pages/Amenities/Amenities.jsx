import Amenity from "./Amenity"
import {Link} from "react-router-dom"
import "./Amenities.css"

const Amenities = () => {
  const amenitiesHeader = [
    "Title"
  ]

  return (
    <div className="container-table">
        <div className="table-section">
          <div className="table-header">
            <p className="table-title">Amenities Management</p>
            <span className="table-sub-title">Amenities are the exclusive services for clients</span>
          </div>
          
          <Link to="/admin/amenities/new" className="btn btn-primary">New Amenity</Link>
          
          {/* <div className="response">
            { success && <p className="success">Hotel has been deleted successfully!</p> }
            {error && <p className="error">Hotel has been deleted successfully!</p>}
          </div> */}
        </div>
        <Amenity headers={amenitiesHeader} /> 
    </div>
  )
}

export default Amenities
