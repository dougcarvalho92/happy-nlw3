import React from "react";

// import { Container } from './styles';
import markerImg from "../../images/map-marker.svg";
import { Map, TileLayer, Marker } from "react-leaflet";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import {
  MapContainer,
  BarraLateral,
  CreateOrphanage,
  PopupMarker,
} from "./styles";
import "leaflet/dist/leaflet.css";
import Leaflet from "leaflet";
import { Link } from "react-router-dom";

const mapIcon = Leaflet.icon({
  iconUrl: markerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

const OrphanagesMap: React.FC = () => {
  return (
    <MapContainer>
      <BarraLateral>
        <header>
          <img src={markerImg} alt="marker" />
          <h2>Escolha uma casa de acolhimento no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Niterói</span>
        </footer>
      </BarraLateral>
      <Map
        center={[-22.9079689, -43.087459]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        <Marker position={[-22.9079689, -43.087459]} icon={mapIcon}>
          <PopupMarker closeButton={false} minWidth={240} maxWidth={240}>
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </PopupMarker>
        </Marker>
      </Map>
      <CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </MapContainer>
  );
};

export default OrphanagesMap;
