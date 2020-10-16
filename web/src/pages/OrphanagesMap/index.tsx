import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Map, TileLayer, Marker } from "react-leaflet";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import {
  MapContainer,
  BarraLateral,
  CreateOrphanage,
  PopupMarker,
} from "./styles";

import mapIcon from "../../utils/mapIcon";
import markerImg from "../../images/map-marker.svg";
import api from "../../services/api";
import Menu from "../../components/Menu";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      const orphanages = response.data;
      setOrphanages(orphanages);
    });
  }, []);

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
      <Menu />
      <Map
        center={[-22.9079689, -43.087459]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanage) => (
          <Marker
            position={[orphanage.latitude, orphanage.longitude]}
            icon={mapIcon}
            key={orphanage.id}
          >
            <PopupMarker closeButton={false} minWidth={240} maxWidth={240}>
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </PopupMarker>
          </Marker>
        ))}
      </Map>
      <CreateOrphanage to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </CreateOrphanage>
    </MapContainer>
  );
};

export default OrphanagesMap;
