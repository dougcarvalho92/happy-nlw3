import styled from "styled-components";
import NotFound from "../../images/notfoundicon.svg";
export const Details = styled.div`
  margin: 64px auto;
  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;
  overflow: hidden;
`;

export const MapContainer = styled.div`
  margin-top: 64px;
  background: #e6f7fb;
  border: 1px solid #b3dae2;
  border-radius: 20px;
  .leaflet-container {
    border-radius: 20px;
    max-height: 200px;
  }
  footer {
    padding: 20px 30px;
    text-align: center;
    background: #fff;
    border-radius: 0px 0px 20px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-family: Nunito;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 34px;
      color: #4d6f80;
    }
    a {
      background: #ebf2f5;
      border-radius: 16px;
      padding: 12px;
      display: inline-flex;
      + a{
        margin-left: 10px
      }
     
    }
  }
`;
interface Loading {
  loading: boolean;
}
export const DetailsList = styled.div<Loading>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  background-image: url(${(props) => (props.loading ? NotFound : "")});
  background-position: center center;
  background-repeat: no-repeat;
`;
