import "./Places.css";
import PlaceList from "./PlacesList";

const SearchResults = () => {
  return (
    <div className="search-list">
      <div className="filter-side">Search Filters</div>
      <div className="search-results">
        <PlaceList></PlaceList>
      </div>
    </div>
  );
};

export default SearchResults;
