import jwt from "jsonwebtoken";
import authConfig from "./auth";

export default {
  sign: (payload: Object) => {
    return jwt.sign(payload, authConfig.secret, {
      expiresIn: 86400,
    });
  },
  verify: (token: string) => jwt.verify(token, authConfig.secret),
};
