import express, { Request, Response } from "express";
import "express-async-errors";
import "./database/connection";
import routes from "./routes";
import path from "path";
import errorHandler from "./erros/handler";
import morgan from "morgan";
import fs from "fs";
import cors from "cors";
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

const app = express();
app.use(cors());
app.use(express.json());

app.use(morgan("combined", { stream: accessLogStream }));
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(errorHandler);

app.listen(3333, () => {
  console.log("---------> Iniciado na porta 3333");
});
