import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import HotelList from "./HotelList"
import useGetHotels from "../../../hooks/useGetHotels"

const Hotels = () => {
  const {hotels} = useGetHotels()

  const headers = [
    "Image","Title", "Description", "City","Country","Address","Last Updated"
  ]
  
  return (
    <div className="container-user">
         <div className="table-title">
                <p className="page-title"> Hotels</p>
                <Link to="/admin/hotels/new" className="btn btn-new">New Hotel</Link>
            </div>
           
           <HotelList data={hotels} headers={headers} />
    </div>
)}

export default Hotels
