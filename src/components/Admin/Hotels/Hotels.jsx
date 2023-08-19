import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import HotelList from "./HotelList"
import useGetHotels from "../../../hooks/useGetHotels"
import "./Hotel.css"

const Hotels = () => {
  const headers = [
    "Image","Title", "Description", "City","Country","Address","Last Updated"
  ]
  
  return (
    <div className="container-user">
         <div className="table-title">
            <div className="title-section">
              <p className="page-title">  Hotel Listings Management</p>
              <span className="">Update information, make improvements, or remove outdated listings</span>
            </div>
            
            <Link to="/admin/hotels/new" className="btn btn-primary">New Hotel</Link>
        </div>
        
        <HotelList headers={headers} />
    </div>
)}

export default Hotels
