import "../../App.css";
import { useState } from "react";
import Search from "../../components/search/Search";
import SearchResults from "../../components/places/SearchResults";

const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <>
      <Search
       places={data} 
       setPlaces={setData}
      />
      <SearchResults
        places={data}
        setPlaces={setData}
      />
    </>
  );
};

export default Home;
