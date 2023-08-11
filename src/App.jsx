import "./App.css";
import Content from "./components/partials/Content";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Routes, 
  BrowserRouter ,
  Route,
  RouterProvider
} from 'react-router-dom';
import Home from "./components/Home/Home";
import PlaceDetails from "../src/components/PlaceDetails/PlaceDetails";
import Login from "../src/components/Auth/Login"
import Register from "../src/components/Auth/Register"
import { useAuthContext } from "./hooks/useAuthContext";

import Dashboard from "../src/components/Admin/Dashboard/Dashboard.jsx"
import Users from "./components/Admin/Users/Users";
import NewUser from "./components/Admin/Users/NewUser";
import AdminLayout from "./layouts/AdminLayout"
import PublicLayout from "./layouts/PublicLayout"
import NotFound from "./components/NotFound/NotFound.jsx";


function App() {
  const {user} = useAuthContext();

  const adminRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AdminLayout />} basename="/admin">
        <Route
          path="admin"
          element={<Dashboard />}
        />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/users/new" element={<NewUser />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  
  const publicRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<PublicLayout />} >  
        <Route index element={<Home />} />
        <Route path = "/place/:id" element={<PlaceDetails />} />
        <Route path='/signin' element={<Login />} className="nav-group-item" />
        <Route path='/signup' element={<Register />} className="nav-group-item" />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )
  return (
    <>
    {!user && (
      <RouterProvider router={publicRouter} />
    )}

    {user && (
      <RouterProvider router={adminRouter} />      
    )}
    </>
  );
}

export default App;
