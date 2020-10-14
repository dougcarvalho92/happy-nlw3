import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import Sidebar from "../../components/Sidebar";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import {
  DetailContent,
  Details,
  MapContainer,
  OrphanageContainer,
  OpenDetails,
  DetailImageList,
} from "./styles";

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
interface OrphanageParams {
  id: string;
}
export default function Orphanage() {
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const params = useParams<OrphanageParams>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      const orphanage = response.data;
      setOrphanage(orphanage);
    });
  }, [params.id]);

  if (!orphanage) return <p>Carregando...</p>;
  return (
    <OrphanageContainer>
      <Sidebar />
      <main>
        <Details>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <DetailImageList>
            {orphanage.images.map((image, index) => (
              <button
                className={activeImageIndex === index ? "active" : ""}
                type="button"
                key={image.id}
                onClick={() => setActiveImageIndex(index)}
              >
                <img src={image.url} alt={orphanage.name} />
              </button>
            ))}
          </DetailImageList>

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
      </main>
    </OrphanageContainer>
  );
}
