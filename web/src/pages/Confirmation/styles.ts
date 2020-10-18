import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../images/create-confirm-icon.svg";
interface StateProps {
  type: string;
}
export const ConfirmationContainer = styled.div<StateProps>`
  background: ${(props) => (props.type === "confirm" ? "#37c77f" : "#FF669D")};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: url(${logoImg}) no-repeat 80% center;
`;

export const Main = styled.div`
  max-width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }
  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`;

export const EnterApp = styled(Link)<StateProps>`
  margin-top: 40px;
  padding: 20px 30px;
  background: ${(props) => (props.type === "confirm" ? "#31b272" : "#D6487B")};
  border-radius: 20px;
  max-width: 243px;
  transition: background-color 0.2s;
  text-decoration: none;
  color: #fff;
  span {
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
  }
  &:hover {
    background:${(props) => (props.type === "confirm" ? "#3bd689;" : "#F30072")}; 
  }
`;
