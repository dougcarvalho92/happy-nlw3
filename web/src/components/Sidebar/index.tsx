import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import mapMarkerImg from "../../images/map-marker.svg";
import { FiArrowLeft, FiMapPin, FiAlertCircle } from "react-icons/fi";
import { AppSidebar, Menu, MenuItem } from "./styles";

const Sidebar: React.FC = () => {
  const { goBack } = useHistory();
  const [activeMenu, setActiveMenu] = useState(0);
  return (
    <AppSidebar>
      <img src={mapMarkerImg} alt="Happy" />
      <Menu>
        <MenuItem to="/" defaultChecked={true}>
          <FiMapPin size={24} color="#FFF" />
        </MenuItem>
        <MenuItem to="/">
          <FiAlertCircle size={24} color="#FFF" />
        </MenuItem>
      </Menu>
      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </AppSidebar>
  );
};

export default Sidebar;
