import { Link } from "react-router-dom";
import styled from "styled-components";

export const RestrictMenuButton = styled(Link)`
  z-index: 999;
  position: absolute;
  right: 40px;
  top: 40px;
  width: 222px;
  height: 56px;
  background: #12d4e0;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s;
  text-decoration: none;
  color: #fff;
  &:hover {
    background: #96feff;
    color: #15c3d6;
  }
`;
