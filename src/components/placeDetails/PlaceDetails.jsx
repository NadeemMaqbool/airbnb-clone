import Content from "../partials/Content";
import Hotel from "./Hotel";
import { useParams } from "react-router-dom";
const PlaceDetails = () => {
  const {id} =  useParams()
  console.log(id)
  return (
    <>
      <Content />
        <Hotel placeId={id}/>
    </>
  );
}

export default PlaceDetails;