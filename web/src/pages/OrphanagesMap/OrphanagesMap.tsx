import React from "react";

// import { Container } from './styles';
import markerImg from "../../images/map-marker.svg";
import { Map, TileLayer } from "react-leaflet";
import { FiPlus } from "react-icons/fi";
import { MapContainer, BarraLateral, CreateOrphanage } from "./styles";
import 'leaflet/dist/leaflet.css';

const OrphanagesMap: React.FC = () => {
  return (
    <MapContainer>
      <BarraLateral>
        <header>
          <img src={markerImg} alt="marker" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Niterói</span>
        </footer>
      </BarraLateral>
      <Map
      center={[-22.9079689,-43.087459]}
      zoom={15}
      style={{ width:'100%', height: '100%'}}
      
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

      </Map>
      <CreateOrphanage to="">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </MapContainer>
  );
};

export default OrphanagesMap;
