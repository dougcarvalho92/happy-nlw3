import React from "react";
import Sidebar from "../../components/Sidebar";

import { Container, Content, Title } from "./styles";
interface DefaultProps {
  title?: string;
  count?: number;
}
const DefaultPage: React.FC<DefaultProps> = ({
  title,
  children,
  count,
  ...props
}) => {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Title>
          <h1>{title}</h1>{" "}
          <span>
            {count && count > 1 ? `${count} orfanatos` : `${count} orfanato`}{" "}
          </span>
        </Title>
        {children}
      </Content>
    </Container>
  );
};

export default DefaultPage;
