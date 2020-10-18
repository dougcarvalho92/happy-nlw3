import React from "react";
import Routes from "./routes";
import "leaflet/dist/leaflet.css";
import "./styles/global.ts";
import { AuthProvider } from "./context/AuthContext";




function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
