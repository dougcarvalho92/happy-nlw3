import React, { FormEvent, useState } from "react";

import {
  RegisterContainer,
  BarraLateral,
  FormContainer,
  ErrorContent,
} from "./styles";

import logo from "../../images/login-logo.svg";

import { useAuth } from "../../context/AuthContext";

interface ErrosTypes {
  email?: string;
  password?: string;
  confirm_password?: string;
}
const Register: React.FC = () => {
  const { CreateUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [reminder, setReminder] = useState(false);
  const [error, setError] = useState<ErrosTypes>({});

  async function handleRegisterNewUser(e: FormEvent) {
    e.preventDefault();
    console.log("aqui 1");
    if (await validate()) {
      const data = { userinfo: { email, password, level: 1 }, reminder };

      CreateUser(data);
    }
  }
  async function validate() {
    setError({});
    let errors = {
      email: "",
      password: "",
      confirm_password: "",
    };
    let isValid = true;

    if (!email) {
      isValid = false;
      errors.email = "Please enter your email Address.";
    }
    if (typeof email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );

      if (!pattern.test(email)) {
        isValid = false;
        errors.email = "Please enter valid email address.";
      }
    }
    if (!password) {
      isValid = false;
      errors.password = "Please enter your password.";
    }
    if (!confirmPassword) {
      isValid = false;
      errors.confirm_password = "Please enter your confirm password.";
    }
    if (
      typeof password !== "undefined" &&
      typeof confirmPassword !== "undefined"
    ) {
      if (password !== confirmPassword) {
        isValid = false;
        errors.password = "Passwords don't match.";
        errors.confirm_password = "Passwords don't match.";
      }
    }
    if (!isValid) {
      setError(errors);
    }
    return isValid;
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
            <ErrorContent>{error.email}</ErrorContent>
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
            <ErrorContent>{error.password}</ErrorContent>
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
            <ErrorContent>{error.confirm_password}</ErrorContent>
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

        <button className="confirm-button" type="submit">
          Confirmar
        </button>
      </FormContainer>
    </RegisterContainer>
  );
};

export default Register;
