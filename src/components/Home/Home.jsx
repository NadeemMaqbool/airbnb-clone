import "../../App.css";
import { useState } from "react";
import Search from "../../components/search/Search";
import SearchResults from "../../components/places/SearchResults";

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <>
      <Search
       places={data} 
       setPlaces={setData}
      />
      <SearchResults />
    </>
  );
};

export default Home;
