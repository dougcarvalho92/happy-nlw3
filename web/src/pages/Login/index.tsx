import React, { useEffect } from "react";

import {
  LoginContainer,
  BarraLateral,
  FormContainer,
  RememberPass,
  GoBackButton,
} from "./styles";

import logo from "../../images/login-logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const Login: React.FC = () => {
  const { goBack } = useHistory();
  useEffect(() => {}, []);

  return (
    <LoginContainer>
      <BarraLateral>
        <header>
          <img src={logo} alt="marker" />
        </header>

        <footer>
          <strong>Rio de Janeiro</strong>
          <span>Niterói</span>
        </footer>
      </BarraLateral>

      <FormContainer>
        <GoBackButton type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#12afcb" />
        </GoBackButton>
        <fieldset>
          <legend>Fazer Login</legend>

          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              // value={name}
              // onChange={(event) => {
              //   setName(event.target.value);
              // }}
            />
          </div>

          <div className="input-block">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              // value={name}
              // onChange={(event) => {
              //   setName(event.target.value);
              // }}
            />
          </div>
        </fieldset>
        <RememberPass>
          <div className="input-block-check">
            <input
              type="checkbox"
              id="reminder"
              // value={name}
              // onChange={(event) => {
              //   setName(event.target.value);
              // }}
            />
            <label htmlFor="reminder">Lembrar-me</label>
          </div>
          <Link to="/">Esqueci minha senha</Link>
        </RememberPass>
        <button className="confirm-button" type="submit">
          Confirmar
        </button>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
