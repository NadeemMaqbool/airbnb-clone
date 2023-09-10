import axios from 'axios'
import { useState, useEffect } from 'react'
import {CiTrash, CiEdit} from "react-icons/ci"

const Amenity = (props) => {
  const [amenities, setAmenities] = useState([])
  const {headers} = props
  
  useEffect(() => {
    const getAmenities= async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/amenities",{
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })

        const data = await response.data
        if (data) {
          setAmenities(data)
        }
      } catch (err) {
        console.error(err)
      }
    }

    getAmenities()
  })

  return (
  <section>
    <div className='table-group'>
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
          {amenities && amenities.map((item) => (
            <tr>
              <td>{item.name}</td>
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
    </div>
  </section>
  )
}

export default Amenity
