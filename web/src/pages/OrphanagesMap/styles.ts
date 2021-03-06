import styled from "styled-components";
import { Link } from "react-router-dom";
import { Popup } from "react-leaflet";


export const MapContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
`;
export const BarraLateral = styled.aside`
  width: 440px;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  padding: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }
  p {
    line-height: 28px;
    margin-top: 24px;
  }
  footer {
    display: flex;
    flex-direction: column;

    line-height: 24px;
    strong {
      font-weight: 800;
    }
  }
`;
export const CreateOrphanage = styled(Link)`
  z-index: 999;
  position: absolute;
  right: 40px;
  bottom: 40px;
  width: 64px;
  height: 64px;
  background: #15c3d6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  &:hover {
    background: #17d6eb;
  }
`;
export const PopupMarker = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }
  .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      width: 40px;
      height: 40px;
      background: #15c3d6;
      border-radius: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .leaflet-popup-tip-container{
    display:none;
  }
`;
