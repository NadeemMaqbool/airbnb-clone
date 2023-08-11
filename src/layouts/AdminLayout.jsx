import Header from "../components/Admin/Header/Header.jsx"
import Menu from "../components/Admin/Menus/LeftMenu.jsx"
import Footer from "../components/Admin/Footer/Footer.jsx"
import {Outlet} from "react-router-dom"

export default function AdminLayout() {
  return (
    <div className="container-admin">
        <Header />

        <div className="content-admin">

            <Menu />
            <Outlet />
        </div>

        <Footer />

    </div>
  )
}
