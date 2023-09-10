import { useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

const NewAmenity = () => {
  const [title, setTitle] = useState("")
  
  const navigate = useNavigate()
  
  const handleAmenities = async (e) => {
    e.preventDefault()
    const formObj = new FormData()
    formObj.append('name', title)
    
    const response = await axios.post("http://localhost:8080/api/amenities",
    {
      name: title
    })

    const data = await response.data 

    if (data){
      navigate("/admin/amenities")
    }
  }

  return (
    <div className="form-container">
      <div className="form-group">
        <div className="form-title">
            <p className="title">New Hotel</p>
        </div>
        <form className="user-form" onSubmit={handleAmenities}>
            <div className="form-item">
                <label htmlFor="title">Title</label>
                <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Amenity Title"
                />
            </div>
            <div className="form-item">
                <button type="submit" className="btn btn-primary">
                    Save
                </button>
            </div>
        </form>  
      </div>  
    </div>
  )
}

export default NewAmenity
