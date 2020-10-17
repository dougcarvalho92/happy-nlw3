import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  user: object | null;
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
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    const storagedUser = sessionStorage.getItem("@App:user");
    const storagedToken = sessionStorage.getItem("@App:token");
    if (!storagedUser && !storagedToken) {
      const storageUser = localStorage.getItem("Auth:user");
      const storageToken = localStorage.getItem("Auth:token");
      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers.Authorization = `Bearer ${storageToken}`;
      }
    }
  }, []);

  async function Login(userData: Credential) {
    const response = await api.get("/users", { auth: userData.userinfo });

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    if (userData.reminder) {
      localStorage.setItem("Auth:user", JSON.stringify(userData));
      localStorage.setItem("Auth:token", response.data.token);
    } else {
      sessionStorage.setItem("@App:user", JSON.stringify(response.data.user));
      sessionStorage.setItem("@App:token", response.data.token);
    }
  }
  async function CreateUser(userData: CreateUser) {
    const response = await api
      .post("/users", userData.userinfo)
      .then((res) => res.data);

    setUser(response.data.user);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    if (userData.reminder) {
      localStorage.setItem("Auth:user", JSON.stringify(userData));
      localStorage.setItem("Auth:token", response.data.token);
    } else {
      sessionStorage.setItem("@App:user", JSON.stringify(response.data.user));
      sessionStorage.setItem("@App:token", response.data.token);
    }
  }
  function Logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout, CreateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
