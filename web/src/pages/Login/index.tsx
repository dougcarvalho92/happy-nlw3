import React, { useEffect } from "react";

import {
  LoginContainer,
  BarraLateral,
  FormContainer,
  RememberPass,
} from "./styles";

import logo from "../../images/login-logo.svg";
import { Link } from "react-router-dom";
import Axios from "axios";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const Login: React.FC = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      const location = navigator.geolocation.getCurrentPosition(function (
        position
      ) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        Axios.get("https://geolocation-db.com/json").then(result=>{
          console.log(result);
        })
      });
    } else {
      console.log("Not Available");
    }
  }, []);

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
