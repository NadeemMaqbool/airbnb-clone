import Spinner from 'react-bootstrap/Spinner';
import "./Skeleton.css"
const SpinnerListing = () => {
  return (
    <div className='spinner-section spinner-position'>
      <div>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
      </div>
      <div className='spinner-content'>
        <span>Loading Data</span>
      </div>
    </div>
  )
}

export default SpinnerListing
