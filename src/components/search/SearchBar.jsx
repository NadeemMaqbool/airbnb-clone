import "./Search.css";
import cities from "cities.json";
import { useState } from "react";
import DateInput from "./DateInput";
import axios from "axios"

const SearchBar = (props) => {
  const {places, setPlaces} = props

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDates, setSelectedDates] = useState(null);
  const [isValidForm, setIsValidForm] = useState(true);

  const setSearchedCity = (city) => () => {
    setSelectedCity(city);
  };

  const getDates = (dateValues) => {
    setSelectedDates(dateValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedCity === "" && selectedDates === null) {
      return false
    }
    
    const checkIn = selectedDates[0]
    const checkOut = selectedDates[1]
    
    await axios.post('http://localhost:8080/api/search/place', {
        location: selectedCity,
        checkIn: checkIn,
        checkOut: checkOut
      }).then((response) => {
        const resp = response.data
        setPlaces(resp)
      })
      .catch(err => console.error(err))
  }
  
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
          <input className="form-in" type="number" placeholder="Guests" min="1"/>
        </div>
        <div className="search-form-group">
          <input className="form-in" type="number" placeholder="Rooms" min='1'/>
        </div>
        <div
          className="search-form-group"
        >
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
