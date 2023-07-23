import "./App.css";
import Content from "./components/partials/Content";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

function App() {
  return (
    <>
      <div className="container">
        <Content></Content>
        <Routes>
          <Route path = "/" element={<Home />}/>
          <Route path = "/place/:id" element={<PlaceDetails />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
