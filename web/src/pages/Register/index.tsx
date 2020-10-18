import React, { FormEvent, useState } from "react";

import {
  RegisterContainer,
  BarraLateral,
  FormContainer,
  ErrorContent,
} from "./styles";

import logo from "../../images/login-logo.svg";

import { useAuth } from "../../context/AuthContext";
import { GoBackButton, GoToRegister } from "../Login/styles";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {
  const { CreateUser } = useAuth();
  const { push } = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [reminder, setReminder] = useState(false);

  async function handleRegisterNewUser(e: FormEvent) {
    e.preventDefault();

    const data = { userinfo: { email, password, level: 1 }, reminder };
    const result = await CreateUser(data);
    console.log(result);
  }

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

      <FormContainer onSubmit={handleRegisterNewUser}>
        <GoBackButton type="button" onClick={() => push("/app")}>
          <FiArrowLeft size={24} color="#12afcb" />
        </GoBackButton>
        <fieldset>
          <legend>Registre-se</legend>

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
          <div className="input-block">
            <label htmlFor="confirm-password">Confirme a Senha</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>
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
        </fieldset>
        <fieldset>
          <ErrorContent>Erros</ErrorContent>
        </fieldset>
        <button className="confirm-button" type="submit">
          Confirmar
        </button>
        <GoToRegister to="/login">Já possui conta? </GoToRegister>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
