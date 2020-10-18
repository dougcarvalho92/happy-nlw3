import React, { createContext, useState, useEffect, useContext } from "react";
import history from "../history";

import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  loading: boolean;

  Login(user: object): Promise<void>;
  CreateUser(user: object): Promise<void>;
  Logout(): void;
}
interface Credential {
  userinfo: {
    username: string;
    password: string;
  };
  reminder: boolean;
}
interface CreateUser {
  userinfo: {
    username: string;
    password: string;
    level: number;
  };

  reminder: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  function setSessionData(token: string) {
    sessionStorage.setItem("@App:token", token);
  }
  function setLocalStorageData(token: string) {
    localStorage.setItem("@App:token", token);
  }
  function clearStorage() {
    localStorage.clear();
    sessionStorage.clear();
  }

  useEffect(() => {
    async function checkLogin() {
      setLoading(true);
      var storagedToken = sessionStorage.getItem("@App:token")
        ? sessionStorage.getItem("@App:token")
        : localStorage.getItem("@App:token");

      if (storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        const result = await api.get("/users/token");
        if (result.data.id) {
          setSigned(true);
          history.push('/app');
        } else {
          setSigned(false);
        }
      }
      setLoading(false);
    }
    checkLogin();
  }, [signed]);

  async function Login(userData: Credential) {
    const response = await api.get("/users", { auth: userData.userinfo });

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    const token = response.data.token;
    if (token) {
      if (userData.reminder) {
        setLocalStorageData(token);
      } else {
        setSessionData(token);
      }
      setSigned(true);
      history.push('/app');
    }
  }
  async function CreateUser(userData: CreateUser) {
    if (userData.userinfo) {
      const { token, message } = await api
        .post("/users", userData.userinfo)
        .then((res) => res.data);

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;

        if (userData.reminder) {
          setLocalStorageData(token);
        } else {
          setSessionData(token);
        }
        setSigned(true);
        history.push('/app');
      }
    } else {
      console.log("Campos não enviados");
    }
  }
  function Logout() {
    clearStorage();
    api.defaults.headers.Authorization = undefined;
    setSigned(false);
    history.push('/login');
  }

  return (
    <AuthContext.Provider
      value={{ signed, loading, Login, Logout, CreateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
