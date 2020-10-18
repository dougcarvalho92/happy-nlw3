import React, { useEffect, useState } from "react";
import DefaultPage from "../../components/DefaultPage";
import history from "../../history";
import api from "../../services/api";
import { Map, Marker, TileLayer } from "react-leaflet";
import mapIcon from "../../utils/mapIcon";
import {
  DetailContent,
  Details,
  MapContainer,
  OpenDetails,
  DetailImageList,
} from "./styles";
import { FiClock, FiInfo } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

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

  useEffect(() => {
    api.get("orphanages").then((response) => {
      const orphanages = response.data;
      setOrphanages(orphanages);
    });
  }, []);

  return (
    <DefaultPage title="Dashboard">
      {orphanages.map((orphanage) => {
        return (
          <Details>
            <img src={orphanage.images[0].url} alt={orphanage.name} />

            <DetailContent>
              <h1>{orphanage.name}</h1>
              <p>{orphanage.about}</p>

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
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver rotas no Google Maps
                  </a>
                </footer>
              </MapContainer>

              <hr />

              <h2>Instruções para visita</h2>
              <p>{orphanage.instructions}</p>

              <OpenDetails>
                <div className="hour">
                  <FiClock size={32} color="#15B6D6" />
                  Seg à Sexta
                  <br />
                  {orphanage.opening_hours}
                </div>

                {orphanage.open_on_weekends ? (
                  <div className="open-on-weekends">
                    <FiInfo size={32} color="#37C77F" />
                    Atendemos <br />
                    fim de semana
                  </div>
                ) : (
                  <div className="dont-open-on-weekends">
                    <FiInfo size={32} color="#FF669D" />
                    Não atendemos <br />
                    fim de semana
                  </div>
                )}
              </OpenDetails>

              <button type="button" className="contact-button">
                <FaWhatsapp size={20} color="#FFF" />
                Entrar em contato
              </button>
            </DetailContent>
          </Details>
        );
      })}
    </DefaultPage>
  );
};

export default Dashboard;
