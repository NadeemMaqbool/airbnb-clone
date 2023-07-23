import SearchBar from "./SearchBar";

const Search = (props) => {
  const {places, setPlaces} = props
  return (
    <div className="search-container">
      <p className="search-punchline">
        Unlock the world's wonders, one destination at a time.
      </p>
      
      <SearchBar
       places={places}
        setPlaces={setPlaces} />
    
    </div>
  );
};

export default Search;
