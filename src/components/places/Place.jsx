import "./Place.css";
import { FaStar } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Place = (...place) => {
  const {_id, title, description, image_url, amenities, rooms_data} = place[0].place;
  
  return (
    <div className="places-list">
      <div className="places-list__item">
        <div className="places-list__item__image">
          <img src={image_url} alt="place" className="places-list_img"/>
        </div>
        <div className="places-list__item__info">
          <div>
            <div className="places-list__item__info__title">
              <Link to={`/place/${_id}`}> {title} </Link>
              
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
                      {amenity.name} 
                      {amenities.slice(0, 4).length - 1  !== index ? ',' : ''} </span>; // Add return statement
                  }) 
                ) : (
                  <span></span>
                )
              }
            </div>
          </div>

          <div className="places-list__item__subinfo">
            <div className="place-list__item__subinfo__rating">
            <FaStar color="#c2c95d" size={18} style={{ marginRight: "5px" }} /> 8.6/10 Excellent 200 reviews
            </div>
            <div className="place-list__item__subinfo__price">
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
