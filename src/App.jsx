import "./App.css";
import Content from "./components/partials/Content";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import PlaceDetails from "../src/components/PlaceDetails/PlaceDetails";
import Login from "../src/components/Auth/Login"
import Register from "../src/components/Auth/Register"
import { useAuthContext } from "./hooks/useAuthContext";
import Header from "../src/components/Admin/Header/Header.jsx"
import Menu from "../src/components/Admin/Menus/LeftMenu.jsx"
import Footer from "../src/components/Admin/Footer/Footer.jsx"
import Dashboard from "../src/components/Admin/Dashboard/Dashboard.jsx"


function App() {
  const {user} = useAuthContext();

  return (
    <>
    {!user && (
      <div className="container">
        <Content></Content>
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/place/:id" element={<PlaceDetails />} />
          <Route path='/signin' element={<Login />} className="nav-group-item" />
          <Route path='/signup' element={<Register />} className="nav-group-item" />
        </Routes>
        
      </div>
    )}

    {user && (
      <div className="container-admin">
        <Header />
        <div className="content-admin">
          <Menu />
          <Routes>
            <Route path="/admin" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    )}
    </>
  );
}

export default App;
