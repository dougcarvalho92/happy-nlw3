import React from "react";
import Sidebar from "../../components/Sidebar";

import { Container, Content, Title } from "./styles";
interface DefaultProps {
  title?: string;
}
const DefaultPage: React.FC<DefaultProps> = ({ title, children, ...props }) => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>
          <h1>{title}</h1> <span>1 orfanato</span>
        </Title>
        {children}
      </Content>
    </Container>
  );
};

export default DefaultPage;
