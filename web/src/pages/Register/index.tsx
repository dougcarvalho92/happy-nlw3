import React from "react";

import {
  RegisterContainer,
  BarraLateral,
  FormContainer,

} from "./styles";

import logo from "../../images/login-logo.svg";


interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const Register: React.FC = () => {
  return (
    <RegisterContainer>
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
        <fieldset>
          <legend>Registre-se</legend>

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
          <div className="input-block">
            <label htmlFor="password">Confirme a Senha</label>
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

        <button className="confirm-button" type="submit">
          Confirmar
        </button>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
