import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import {Col, Form} from 'react-bootstrap';
import useGetAmenities from "../../../hooks/useGetAmenities"
import axios from "axios";

const NewHotel = () => {
  const hotelAmenities  = useGetAmenities()
  const [checkboxes, setCheckboxes] = useState([])
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    city: "",
    country: "",
  });
  const [amenities, setAmenities] = useState([]);
  const [image, setImage] = useState()
  const [refundable, setRefundable] = useState(false)
  const [paylater, setPaylater] = useState(false)
  const [signupDiscount, setSignupDiscount] = useState(false)
  const [selectedAmenities, setSelectedAmenities] = useState([])
  
  const navigate = useNavigate()

  const handleFormDataChanges = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value }); 
  };
  
  const handleAmenitiesChange = (e, i) => {
    const checks = [...checkboxes]
    checks[i] = e.target.checked
    setCheckboxes(checks)
    
    const elem = e.target.name
    if (selectedAmenities.includes(elem)) {
      const updatedAmenities = selectedAmenities.filter(el => el !== elem)
      setSelectedAmenities(updatedAmenities)
    } else {
      setSelectedAmenities([...selectedAmenities, elem])
    }
  }

  const handlHotelFormSubmission = async (event) => {
    event.preventDefault();
    try {
      const formObj = new FormData()

    /* Hotel Object related fields */
      formObj.append('title', formData.title)
      formObj.append('description', formData.description)
      formObj.append('address',formData.address)
      formObj.append('city', formData.city)
      formObj.append('country', formData.country)
      formObj.append('image_url', image)
      formObj.append('refundable', refundable)
      formObj.append('payLater', paylater)
      formObj.append('signupDiscount', signupDiscount)
    
      /** HotelAmenitiesObj related fields*/
      formObj.append('amenities', JSON.stringify(selectedAmenities))

      const response = await axios.post("http://localhost:8080/api/places", 
        formObj,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
      
      const data = await response.data;
      if (data){
          navigate("/admin/hotels")
      }
    } catch (error) {
        console.error(error)
    }
  }
  useEffect(() => {
    setAmenities(hotelAmenities.amenities)
    
  }, [hotelAmenities]);

  return (
    <div className="form-container">
      <div className="form-group">
        <div className="form-title">
          <p className="title">New Hotel</p>
        </div>
        <form 
          className="user-form" 
          onSubmit={handlHotelFormSubmission}
          encType="multipart/form-data"
        >
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
            
            <Form.Control 
              type="file" 
              name="image_url"
              onChange={(e) => setImage(e.target.files[0])}  
            />
          </div>
          
          <div className="form-amenities">
            <div className="amenities-heading">
              Amenities
            </div>
            <div className="amenities-listing">
              { amenities.length > 0 && amenities.map((amenity, index) => (
                  <Form.Group key={index} as={Col} controlId={`checkbox-${index}`} >
                    <Form.Check
                      className="amenity-item"
                      type="checkbox"
                      id={`checkbox-${index}`}
                      label={amenity.name}
                      name={amenity._id}
                      checked={checkboxes[index] || false}
                      onChange={(e) => handleAmenitiesChange(e, index)}  
                    />
                  </Form.Group>
              ))}
            </div>
          </div>
          
          <div className="additional-info">
             <div className="amenities-heading">
              Special Services
            </div>
            <div className="additional-services">
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch1"
                label="Refundable"
                checked={refundable || false}
                onChange={() => setRefundable(refundable => !refundable)}
              />
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch2"
                label="Pay Later"
                checked={paylater || false}
                onChange={() => setPaylater(paylater => !paylater)}
              />
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch3"
                label="Signup Discount"
                checked={signupDiscount || false}
                onChange={() => setSignupDiscount(signupDiscount =>!signupDiscount)}
              />
            </div>
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
