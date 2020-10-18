import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import {
  Main,
  ConfirmationContainer,
  EnterApp,
  ContentWrapper,
} from "./styles";

interface StateProps {
  title: string;
  description: string;
  type: string;
}

const Confirmation: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const { state } = useLocation<StateProps>();

  useEffect(() => {
    if (state) {
      setTitle(state.title);
      setDescription(state.description);
      setType(state.type);
    }
  }, []);

  return (
    <ConfirmationContainer type={type}>
      <ContentWrapper>
        <Main>
          <h1>{title}</h1>
          <p>{description}</p>
          <EnterApp to="/app" type={type}>
            <span>Voltar para o mapa</span>
          </EnterApp>
        </Main>
      </ContentWrapper>
    </ConfirmationContainer>
  );
};

export default Confirmation;
