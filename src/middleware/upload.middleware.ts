import multer from "multer";

export const TIPOS_PERMITIDOS = ["application/pdf", "image/jpeg", "image/png"];
export const TAMANHO_MAXIMO = 5 * 1024 * 1024; // 5MB

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: TAMANHO_MAXIMO },
  fileFilter: (req, file, cb) => {
    if (!TIPOS_PERMITIDOS.includes(file.mimetype)) {
      cb(new Error("Tipo de arquivo não permitido. Envie PDF, JPG ou PNG."));
      return;
    }
    cb(null, true);
  },
});