import React, { useEffect } from "react";
import mapMarkerImg from "../../images/map-marker.svg";
import { FiArrowLeft, FiMapPin, FiAlertCircle, FiPower } from "react-icons/fi";
import { AppSidebar, Menu, MenuItem } from "./styles";
import { useAuth } from "../../context/AuthContext";
import history from "../../history";
import { useHistory } from "react-router-dom";

const Sidebar: React.FC = () => {
  const { Logout } = useAuth();
  const { signed } = useAuth();
  const { location, goBack } = useHistory();
  const pathname = location.pathname;
  useEffect(() => {}, []);

  return (
    <AppSidebar>
      <img
        src={mapMarkerImg}
        alt="Happy"
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/app")}
      />
      <Menu>
        <MenuItem
          onClick={() => history.push("/dashboard")}
          defaultChecked={pathname === "/dashboard" ? true : false}
        >
          <FiMapPin size={24} color="#FFF" />
        </MenuItem>
        <MenuItem
          onClick={() => history.push("/dashboard/pending")}
          defaultChecked={pathname === "/dashboard/pending" ? true : false}
        >
          <FiAlertCircle size={24} color="#FFF" />
        </MenuItem>
      </Menu>
      <footer>
        {signed ? (
          <button type="button" onClick={() => Logout()}>
            <FiPower size={24} color="#FFF" />
          </button>
        ) : (
          <button type="button">
            <FiArrowLeft size={24} color="#FFF" onClick={() => goBack()} />
          </button>
        )}
      </footer>
    </AppSidebar>
  );
};

export default Sidebar;
