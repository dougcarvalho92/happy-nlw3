import { Link } from "react-router-dom";
import styled from "styled-components";

export const AppSidebar = styled.aside`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(329.54deg, #15b6d6 0%, #15d6d6 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 48px;
  }

  footer a,
  footer button {
    width: 48px;
    height: 48px;
    border: 0;
    background: #12afcb;
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  footer a:hover,
  footer button:hover {
    background: #17d6eb;
  }
`;
export const MenuItem = styled(Link)`
  width: 48px;
  height: 48px;
  border: 0;
  background: ${(props) => (props.defaultChecked ? "#FFD666" : "#12afcb")};
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;

  + a {
    margin-top: 10px;
  }
  :hover {
    background: #FFD666;
  }
  :active{
    background: #FFD666;
  }
`;

export const Menu = styled.div``;
