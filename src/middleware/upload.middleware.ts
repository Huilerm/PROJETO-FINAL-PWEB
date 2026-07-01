import multer from "multer";
import crypto from "crypto"
import path from "path";
import fs from "fs";

export const TIPOS_PERMITIDOS = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
export const TAMANHO_MAXIMO = 5 * 1024 * 1024;

const BASE_DIR = path.resolve(process.cwd(), "uploads");

if(!fs.existsSync(BASE_DIR)) {
  fs.mkdirSync(BASE_DIR, { recursive: true });
}

export const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve("uploads"));
    },

    filename(req, file, callback) {
      const hash = crypto.randomBytes(10).toString("hex");
      const filename = `${hash}-${file.originalname}`;
      callback(null, BASE_DIR);
    }
  }),

  limits: {
    fileSize: TAMANHO_MAXIMO,
  },

  fileFilter(req, file, callback) {
    if (!TIPOS_PERMITIDOS.includes(file.mimetype)){
      return callback(new Error("Arquivo não permitido"));
    }

    callback(null, true);
  }
});