import { Outlet } from "react-router-dom";
import Content from "../components/partials/Content";
import '../../src/components/partials/Content.css'

const PublicLayout = () => {
  return (
    <div className="container">
      <div className="content-container">
        <div className="content">
          <Content></Content>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
