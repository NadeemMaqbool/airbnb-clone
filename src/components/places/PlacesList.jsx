import Place from "./Place";
import Loader from "../Loader/Loader.jsx";

const PlaceList = (props) => {
  const {places} = props

  return (
    <div className="places-container">
      {
        places && places.length > 0 ? (
          places.map((place) => (
            <Place key={place._id} place={place} />
          ))
        ) : (
          <Loader />
        )
      }
    </div>
  );
};

export default PlaceList;
