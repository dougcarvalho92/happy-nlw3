import { Request, Response } from "express";

import jwt from "../config/jwt";

export default {
  async index(request: Request, response: Response) {
    const token = request.headers.authorization;

    const clearToken = token ? token.split(" ")[1] : "";

    const isAuth = await jwt.verify(clearToken);

    if (isAuth) {
      return response.status(200).json(isAuth);
    } else {
      return response.status(401).send();
    }
  },
};
