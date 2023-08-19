import Pagination from 'react-bootstrap/Pagination';
import "./Pagination.css"
import { useState } from "react"

const PaginationBasic = (props) => {
    const {page, setPage, total} = props
 
    let items = [];
    for (let number = 1; number <= total; number++) {
        items.push(
            <Pagination.Item 
                key={number} 
                active={number === page} 
                onClick={() => setPage(number)}
            >
                {number}
            </Pagination.Item>,
        );
    }
    
    return (
        <div className='alert-section'>
           <Pagination size="sm">{items}</Pagination>
        </div>
    )  
}

export default PaginationBasic
  