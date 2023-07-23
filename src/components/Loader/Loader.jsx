import React from 'react'
import Skeleton from "../Loader/Skeleton"

const Loader = () => {
  
  return (
    <div className="no-data animate-pulse">
        { 
            Array(3).fill(null).map((_, index) => (
                <Skeleton key={index} />
            ))
        }
    </div>
  )
}

export default Loader
