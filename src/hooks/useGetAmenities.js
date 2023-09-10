import axios from 'axios'
import {useState, useEffect} from 'react'

const useGetAmenities = () => {
    const [amenities, setAmenities] = useState([])

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
            console.error(`Error while getting eminities ${err}`)
          }
        }
    
        getAmenities()
      }, [])
    return {amenities}
}

export default useGetAmenities
