import React, { FormEvent, useEffect, useState } from "react";

import {
  LoginContainer,
  BarraLateral,
  FormContainer,
  RememberPass,
  GoBackButton,
  GoToRegister,
} from "./styles";

import logo from "../../images/login-logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { useAuth } from "../../context/AuthContext";

const Login: React.FC = () => {
  const { Login, error } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reminder, setReminder] = useState(false);
  const { push } = useHistory();

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    await Login({
      userinfo: { username: email, password },
      reminder,
    });
  }
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

      <FormContainer onSubmit={handleLogin}>
        <GoBackButton type="button" onClick={() => push("/app")}>
          <FiArrowLeft size={24} color="#12afcb" />
        </GoBackButton>
        <fieldset>
          <legend>Fazer Login</legend>

          <div className="input-block">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="input-block">
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
        </fieldset>
        <RememberPass>
          <div className="input-block-check">
            <input
              type="checkbox"
              id="reminder"
              onChange={(event) => {
                setReminder(!reminder);
              }}
            />
            <label htmlFor="reminder">Lembrar-me</label>
          </div>
          <Link to="/">Esqueci minha senha</Link>
        </RememberPass>
        <button className="confirm-button" type="submit">
          Confirmar
        </button>
        <GoToRegister to="/register">Não possui conta? </GoToRegister>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
