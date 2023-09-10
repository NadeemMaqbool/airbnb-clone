import "./Places.css";
import PlaceList from "./PlacesList";
import {useState, useEffect} from 'react'
import Loading from '../Loader/Loader.jsx'
import useGetHotels from "../../hooks/useGetHotels"
import axios from 'axios'

const SearchResults = () => {
  const hotelRecords = useGetHotels();
  const [places, setPlaces] = useState()
  
  // useEffect(() => {
  //   const getPlaces = async () => {
  //     await axios.get("http://localhost:8080/api/places")
  //       .then(
  //         (response) => { 
  //           const data = response.data
  //           places?.length > 0 ? setPlaces(...places, data) : setPlaces(data)
  //         })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //     }
  //   getPlaces()
  // }, [])
  
  useEffect(() => {
    setPlaces(hotelRecords.hotels);
}, [hotelRecords])

  return (
    <div className="search-list">
      <div className="filter-side">Search Filters</div>
      <div className="search-results">
        
        <PlaceList places={places}/>
        
      </div>
    </div>
  );
};

export default SearchResults;
