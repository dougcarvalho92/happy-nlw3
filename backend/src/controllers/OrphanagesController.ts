import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Orphanage from "../models/Orphanage";
import orphanages_view from "../views/orphanages_view";
import * as Yup from "yup";
import jwt from "../config/jwt";

interface jwtResponse {
  id: string;
  iat: number;
  exp: number;
}

export default {
  async index(request: Request, response: Response) {
    const orphanageRepository = getRepository(Orphanage);
    const orphanages = await orphanageRepository.find({
      relations: ["images"],
    });

    return response.json(orphanages_view.renderMany(orphanages));
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const orphanageRepository = getRepository(Orphanage);
    const orphanage = await orphanageRepository.findOneOrFail(id, {
      relations: ["images"],
    });

    return response.json(orphanages_view.render(orphanage));
  },
  async create(request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const auth = request.headers.authorization;
    const token = auth ? auth.split(" ")[1] : "";

    const { id } = jwt.verify(token) as jwtResponse;

    if (token && id) {
      const orphanageRepository = getRepository(Orphanage);
      const requestImages = request.files as Express.Multer.File[];
      const images = requestImages.map((image) => ({ path: image.filename }));

      const data = {
        name: name as string,
        latitude: latitude as number,
        longitude: latitude as number,
        about: about as string,
        instructions: instructions as string,
        opening_hours: opening_hours as string,
        open_on_weekends: open_on_weekends === true,
        images,
        user: id,
      };

      const schema = Yup.object().shape({
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(
          Yup.object().shape({
            path: Yup.string().required(),
          })
        ),
      });

      await schema.validate(data, { abortEarly: false });

      const orphanage = orphanageRepository.create(data);


      await orphanageRepository.save(orphanage);

      return response.status(201).json(orphanages_view.render(orphanage));
    }
  },
};
