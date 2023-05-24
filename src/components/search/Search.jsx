import "./Search.css";
import cities from "cities.json";
import { useState } from "react";

const Search = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const setSearchedCity = (city) => () => {
    setSelectedCity(city);
  };
  return (
    <div className="search-container">
      <p className="search-punchline">
        Search place for your next trip. Comfort is guaranteed.
      </p>
      <div className="search-form">
        <div className="search-form-group">
          <input
            className="form-input search-input"
            type="text"
            placeholder="Where are you going?"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          />
          <div className="search-autocomplete">
            <div className="search-item">
              {cities
                .filter((item) => {
                  const searchValue = selectedCity.toLowerCase();
                  const cityName = item.name.toLowerCase();
                  return (
                    searchValue &&
                    cityName.startsWith(searchValue) &&
                    searchValue !== cityName
                  );
                })
                .slice(0, 9)
                .map((city) => {
                  return (
                    <div
                      className="search-item-name city-name"
                      onClick={setSearchedCity(city.name)}
                      key={city.lat}
                    >
                      {city.name}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="search-form-group">
          <input
            className="form-input"
            type="text"
            placeholder="Check-in  Check-out"
          />
        </div>
        <div className="search-form-group">
          <input className="form-in" type="text" placeholder="Guests" />
        </div>
        <div className="search-form-group">
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
