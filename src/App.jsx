import "./App.css";
import Content from "./components/partials/Content";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";
import Login from "../src/components/Auth/Login"
import Register from "../src/components/Auth/Register"

function App() {
  return (
    <>
      <div className="container">
        <Content></Content>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/place/:id" element={<PlaceDetails />} />
          {/* <Route path="/properties" className="nav-group-item" /> */}
          <Route path='/signin' element={<Login />} className="nav-group-item" />
          <Route path='/signup' element={<Register />} className="nav-group-item" />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
