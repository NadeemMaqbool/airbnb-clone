import { useState } from "react";
import {useNavigate} from "react-router-dom"

const NewHotel = () => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    city: "",
    country: "",
    image_url: ""
  });

  const navigate = useNavigate()

  const handleFormDataChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });  
  };

  const handlHotelFormSubmission = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch("http://localhost:8080/api/places", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
    
        const data = await response.json();

        console.log(data)
        if (data){
            navigate("/admin/hotels")
        }
    } catch (error) {
        console.error(error)
    }
  }
  return (
    <div className="form-container">
      <div className="form-group">
        <div className="form-title">
          <p className="title">New Hotel</p>
        </div>
        <form className="user-form" onSubmit={handlHotelFormSubmission}>
          <div className="form-item">
            <label htmlFor="title">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              value={formData.title}
              onChange={handleFormDataChanges}
              placeholder="Hotel Title"
            />
          </div>

          <div className="form-item">
            <label htmlFor="address">Address</label>
            <input 
                name="address" 
                type="text" 
                className="form-control"
                value={formData.address}
                onChange={handleFormDataChanges}
                placeholder="Hotel Address"
            />
          </div>

          <div className="form-item">
            <label htmlFor="city">City</label>
            <input 
                name="city" 
                type="text" 
                className="form-control"
                value={formData.city}
                onChange={handleFormDataChanges}
                placeholder="City"
            />
          </div>

          <div className="form-item">
            <label htmlFor="country">Country</label>
            <input 
                name="country" 
                type="text" 
                className="form-control" 
                value={formData.country}
                onChange={handleFormDataChanges}
                placeholder="Country"
            />
          </div>

          <div className="form-item">
            <label htmlFor="description">Description</label>
            <input 
                name="description" 
                type="text" 
                className="form-control"
                value={formData.description}
                onChange={handleFormDataChanges}
                placeholder="Description"
            />
          </div>
{/* TODO: Later this should be replaced with a more generic function of file upload // */}
          <div className="form-item">
            <label htmlFor="image_url">Image Url</label>
            <input 
                name="image_url" 
                type="text" 
                className="form-control"
                value={formData.image_url}
                onChange={handleFormDataChanges}
                placeholder="Image Url"
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
  );
};

export default NewHotel;
