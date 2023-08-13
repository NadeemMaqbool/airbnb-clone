import { useState, useEffect } from "react"
import {CiTrash, CiEdit} from "react-icons/ci"
import { useAuthContext } from "../../../hooks/useAuthContext"
import moment from "moment"
import "../Table/Table.css"
import "./Hotel.css"
import useGetHotels from "../../../hooks/useGetHotels"

const HotelList = (props) => {

  let {hotels} = useGetHotels()
  const [places, setPlaces] = useState(hotels)
  let { headers } = props
  
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const {user} = useAuthContext()
  
  const deleteHotel = async (hotelId) => {
    try {
      const response = await fetch(`http://localhost:8080/api/places/${hotelId}`,{
        method: 'DELETE',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.token
        },
      })

      const success = await response.json()
      
      if (success) {
        setSuccess(success.message)
        const newPlaces = places.filter(place => place._id !== hotelId)
        setPlaces(newPlaces)
      }  
    } catch (err) {
      setError(success.error)
      console.error("Error ", err)
    }
  }

  const editHotel = (userId) => {
    console.log(userId)
  }
  
  const formatDate = (date) => {
    const dateObj = moment(date, "YYYYMMDD").fromNow()
    return dateObj
  }

  useEffect(() => {
    setPlaces(hotels)
  }, [hotels])
  
  return (
    <div className="table-container">
      <div className="response">
        {
          success && <p className="success">Hotel has been deleted successfully!</p>
        }
        {
          error && <p className="error">Hotel has been deleted successfully!</p>
        }
      </div>
      <table>
        <thead>
          <tr key="fuckoff123">
            {
              headers && headers.map((item) => (
                <th>{item}</th>
              ))
            }
            <th className='action-header'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            places && places.map((hotel, index) => (
              <tr key={hotel._id}> 
                <td className="main-item">
                  <img src={hotel.image_url} alt="hotel img" className="small-img"/>
                </td>
                <td>{hotel.title}</td>
                <td>{hotel.description}</td>
                <td>{hotel.city}</td>
                <td>{hotel.country}</td>
                <td>{hotel.address}</td>
                <td>{formatDate(hotel.created_at)}</td>
                
                <td className='actions'>
                    <button onClick={() => deleteHotel(hotel._id)}  className='action-btn'>
                        <CiTrash size={18} className='action-del' />
                    </button>
                    
                    <button onClick={() => edithotel(hotel._id)} className='action-btn'>
                        <CiEdit size={20} className='action-edit'/>
                    </button>                    
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default HotelList

