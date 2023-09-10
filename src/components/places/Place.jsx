import "./Place.css";
import { FaStar } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Place = (...place) => {
  const {
    _id,
    title, 
    description, 
    address, 
    imageUrl, 
    amenities, 
    rooms_data,
    refundable,
    payLater,
    signupDiscount
  } = place[0].place;
  
  return (
    <div className="places-list">
      <div className="places-list__item">
        <div className="places-list__item__image">
          <img src={imageUrl} alt="place" className="places-list_img"/>
        </div>
        <div className="places-list__item__info">
          <div>
            <div className="places-list__item__info__title">
              <Link to={`/place/${_id}`}> {title} </Link>
              
            </div>
            <div className="places-list__item__info__detail_address">
              {address}
            </div>
            <div className="places-list__item__info__detail">
              {description.slice(0, 150) + '...'}
            </div>
            
            <div className="places-list__item__info__perks">
              {/* <FaHeart color="indianred" size={15} style={{marginRight:"5px"}}/> */}
              {
                amenities && amenities.length > 0 ? (
                  amenities.slice(0,4).map((amenity, index) => {
                    return <span key={index} style={{ textAlign: 'center' }}>
                      {amenity} 
                      {amenities.slice(0, 4).length - 1  !== index ? ',' : ''} </span>; // Add return statement
                  }) 
                ) : (
                  <span></span>
                )
              }
            </div>
          </div>
          <div className="places-list__extra-info">
              <p>{ refundable ? 'Fully Funded' : ''}</p>
              <p>{ payLater ? 'Book Now Pay Later' : ''}</p>
          </div>
          <div className="places-list__item__subinfo">
            <div className="place-list__item__subinfo__rating">
              <span className="place-rating">8.6</span>
              <div className="place-reviews">
                <span className="place-rating-words">Wonderfull</span>
                <span className="place-total-reviews">280 reviews</span>
              </div>
              
            </div>
            <div className="place-list__item__subinfo__price">
              <div className="place-discount">
              { signupDiscount ? (
                <span className="place-discount-signup">
                   Avail discount on sign in
                </span>
              ): ''}
              </div>
              { 
                rooms_data && rooms_data.length > 0 ? (
                <div className="place-list__item__subinfo__price__value">
                  $ { rooms_data[0]?.roomTypeId?.price}
                  <span className="place-list__item__subinfo__price__detail">
                  / night
                  </span>
                </div>
              ) : (
                <div></div>
              )}
              {/* <div className="place-list__item__subinfo__price__label">
                includes taxes and charges
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
