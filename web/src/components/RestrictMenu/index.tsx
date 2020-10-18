import React from "react";
import history from "../../history";

import { RestrictMenuButton } from "./styles";

const RestrictMenu: React.FC = () => {
  return (
    <RestrictMenuButton
      to="/dashboard"
      onClick={() => history.push("/dashboard")}
    >
      Acesso restrito
    </RestrictMenuButton>
  );
};

export default RestrictMenu;
