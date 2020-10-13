import multer from "multer";
import path from "path";
import clearString from "../utils/clearString";

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "uploads"),
    filename: (request, file, cb) => {
      let filename = `${Date.now()}-${clearString(file.originalname)}`;


      cb(null, filename);
    },
  }),
};
