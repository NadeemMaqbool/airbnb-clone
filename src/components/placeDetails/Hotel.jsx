import { useEffect, useState } from "react";
import axios from "axios";
import "./placeDetails.css";

const Hotel = (...params) => {
  const [place, setPlace] = useState(null);
  const [tab, setTab] = useState(1);

  const placeId = params[0].placeId;
  useEffect(() => {
    const getSinglePlace = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/places/${placeId}`
        );
        const data = response.data[0];
        setPlace(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    getSinglePlace();
  }, []);

  const toggleTab = (index) => {
    setTab(index);
  };

  return (
    <div className="container-place">
      <div className="image-container">
        <img src={place?.image_url} alt="" />
      </div>
      <div className="place-container">
        <div className="tabs">
          <button
            className={tab === 1 ? "tabs-link active-tab" : "tabs-link"}
            onClick={() => toggleTab(1)}
          >
            Details
          </button>
          <button
            className={tab === 2 ? "tabs-link active-tab" : "tabs-link"}
            onClick={() => toggleTab(2)}
          >
            Rooms
          </button>
          <button
            className={tab === 3 ? "tabs-link active-tab" : "tabs-link"}
            onClick={() => toggleTab(3)}
          >
            Amenities
          </button>
        </div>
        <div className="content-tabs">
          <div 
            className={tab === 1 ? "content-part active-content place-desc" : "content-part place-desc"}
          >
            <h3>{place?.title}</h3>
            <p className="address-info">
              {place?.address} {place?.city} {place?.country}
            </p>
            <p className="additional-info">{place?.description}</p>
          </div>
          <div
           className={tab === 2 ? "content-part active-content rooms-details" : "content-part rooms-details"}
          >
            <h3>Rooms Details</h3>
            {place?.rooms_data && place?.rooms_data.length > 0 ? (
              <div className="room">
                {place.rooms_data.map((room) => (
                  <div key={room._id} className="single-room">
                    <p className="room-info focus">{room.roomTypeId.name}</p>
                    <p className="room-info">Details: {room.roomTypeId.description}</p>
                    <p className="room-info">Price: 
                      <span className="room-price"> {room.roomTypeId.price} EUR</span>
                    </p>
                    <p className="room-info">Capacity: {room.capacity} person</p>
                  </div>
                ))}
              </div>
            ) : (
              <div>NO rooms data available</div>
            )}
          </div>
          <div 
            className={tab === 3 ? "content-part active-content" : "content-part"}>
            <h3> Amenities</h3>
            <div className="place-amenities">
              {place?.amenities && place?.amenities.length > 0 ? (
                place.amenities.map((amenity) => (
                  <p key={amenity._id} className="single-amenity">{amenity.name}</p>
                ))
              ) : (
                <p>Hotel offers no amenities</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
