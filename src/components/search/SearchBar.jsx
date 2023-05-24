import "./Search.css";
import cities from "cities.json";
import { useState } from "react";
import DateInput from "./DateInput";

const SearchBar = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDates, setSelectedDates] = useState(null);
  const [isValidForm, setIsValidForm] = useState(true);

  const setSearchedCity = (city) => () => {
    setSelectedCity(city);
  };

  const getDates = (dateValues) => {
    setSelectedDates(dateValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCity != "" && selectedDates != null) {
      setIsValidForm(false);
      console.log("Form is valid");
    }
    console.log(e.target);
  };

  return (
    <form onSubmit={handleSubmit}>
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
          <DateInput getDates={getDates}></DateInput>
        </div>
        <div className="search-form-group">
          <input className="form-in" type="number" placeholder="Guests" />
        </div>
        <div className="search-form-group">
          <input className="form-in" type="number" placeholder="Rooms" />
        </div>
        <div
          className={`search-form-group ${isValidForm ? "disabled" : ""}`}
          disabled={isValidForm}
        >
          <button>Search {isValidForm}</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
