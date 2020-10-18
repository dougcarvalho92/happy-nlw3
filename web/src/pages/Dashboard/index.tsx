import React, { useEffect, useState } from "react";
import DefaultPage from "../../components/DefaultPage";

import api from "../../services/api";
import { Map, Marker, TileLayer } from "react-leaflet";
import mapIcon from "../../utils/mapIcon";
import { MapContainer, DetailsList } from "./styles";
import { Link } from "react-router-dom";
import { FiEdit3, FiTrash} from "react-icons/fi";

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    id: string;
    url: string;
  }>;
}

const Dashboard: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getOrphanages() {
      setLoading(true);
      await api.get("orphanages").then((response) => {
        const orphanages = response.data;
        setOrphanages(orphanages);
        setLoading(false);
      });
    } 
    getOrphanages();
  }, []);

  return (
    <DefaultPage title="Dashboard" count={orphanages.length}>
      <DetailsList loading={loading}>
        {orphanages.map((orphanage) => {
          return (
            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
               <h3>Orf. Esperança</h3>
               <div className="actionButton">
                 <Link to="/">
                   <FiEdit3 size={24} color="#15C3D6" />
                 </Link>
                 <Link to="/">
                   <FiTrash size={24} color="#15C3D6" />
                 </Link>
               </div>
              </footer>
            </MapContainer>
          );
        })}
      </DetailsList>
    </DefaultPage>
  );
};

export default Dashboard;
