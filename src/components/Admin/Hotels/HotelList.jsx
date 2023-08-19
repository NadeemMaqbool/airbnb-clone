import { useState, useEffect } from "react"
import {CiTrash, CiEdit} from "react-icons/ci"
import { useAuthContext } from "../../../hooks/useAuthContext"
import moment from "moment"
import "../Table/Table.css"
import "./Hotel.css"
import useGetHotels from "../../../hooks/useGetHotels"
import Alert from "../../Modals/Alerts/Alert"
import PaginationBasic from "../../Pagination/PaginationBasic"
import SpinnerListing from "../../Loader/SpinnerListing"


const HotelList = (props) => {
  const hotelRecords = useGetHotels();

  const [places, setPlaces] = useState()
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState("")
  const {page, setPage, totalPages, loading} = hotelRecords
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
      if (success.message) {
        setSuccess(success.message)
        const newPlaces = places.filter(place => place._id !== hotelId)
        setPlaces(newPlaces)
      } else {
        setError(success.error)
        console.error("Error while deleting", success.error)  
      }
      setShow(false)
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

  const handleShow = (hotelId) => {
    setShow(true)
    setSelectedId(hotelId)
  };

  useEffect(() => {
      setPlaces(hotelRecords.hotels);
  }, [hotelRecords])
  
  return (
    <section>
      <div className="table-container">
        <div className="response">
          {
            success && <p className="success">Hotel has been deleted successfully!</p>
          }
          {
            error && <p className="error">Hotel has been deleted successfully!</p>
          }
        </div>
        { !loading ?
          <table>
            <thead>
              <tr key="12343">
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
                places && places.map((hotel) => (
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
                        <button
                          onClick={() => handleShow(hotel._id)}
                          className='action-btn'>
                            <CiTrash size={18} className='action-del' />
                        </button>
                        
                        <button onClick={() => editHotel(hotel._id)} className='action-btn'>
                            <CiEdit size={20} className='action-edit'/>
                        </button>                    
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
          
          : <SpinnerListing />
        }
      </div>
      <PaginationBasic 
        total={totalPages} 
        page={page} 
        setPage={setPage} 
      />     
      
      <Alert 
        showButton={handleShow}
        show={show}
        setShow={setShow}
        deleteHotel={deleteHotel}
        selectedHotel={selectedId}
        title="hotel"
      />
    </section>
  )
}

export default HotelList

