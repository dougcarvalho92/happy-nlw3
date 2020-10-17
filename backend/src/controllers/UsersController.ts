import { Request, Response } from "express";
import { getRepository } from "typeorm";

const connection = require("../database/connection");
const bcrypt = require("bcrypt");
// const jwt = require("./../config/jwt");
import * as Yup from "yup";
import jwt from "../config/jwt";
import User from "../models/User";
import user_view from "../views/user_view";

export default {
  async index(request: Request, response: Response) {
    const usersRepository = getRepository(User);
    const [hashType, hash] = request.headers.authorization.split("Basic");
    const [email, password] = Buffer.from(hash, "base64").toString().split(":");

    const hashPass = bcrypt.hashSync(password, 8);
    const user = await usersRepository.findOne({
      where: [{ email: email }, { password: hashPass }],
    });

    if (user != undefined) {
      const token = jwt.sign({ id: user.id });
      const userTokenJson = {
        user: user_view.render(user),
        token,
      };

      return response.json(userTokenJson);
    } else {
      return response
        .status(401)
        .json({ message: "Usuário ou password incorretos" });
    }
  },
  async create(request: Request, response: Response) {
    const usersRepository = getRepository(User);
    const { email, password, level } = request.body;

    const find_user = await usersRepository.findOne({
      where: [{ email: email }],
    });
    if (!find_user) {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string()
          .required()
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character (@$!%*#?&)"
          ),
        level: Yup.number().required(),
      });
      const data = { email, password, level };
      const hashPass = bcrypt.hashSync(password, 8);
      await schema.validate(data, { abortEarly: false });
      data.password = hashPass;
      const user = usersRepository.create(data);
      const userCreated = await usersRepository.save(user);
      const token = jwt.sign({ id: userCreated.id });
      const userTokenJson = {
        user: user_view.render(user),
        token,
      };

      return response.json(userTokenJson);
    }
  },
};
