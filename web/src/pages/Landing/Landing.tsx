import React from "react";

import logoImg from "../../images/logo.svg";
import { FiArrowRight } from "react-icons/fi";

import { Main, LandingContainer, EnterApp, Location, ContentWrapper } from "./styles";

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <Main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Main>
        <Location>
          <strong>Rio de Janeiro</strong>
          <span>Niterói</span>
        </Location>
        <EnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />{" "}
        </EnterApp>
      </ContentWrapper>
    </LandingContainer>
  );
};

export default Landing;
