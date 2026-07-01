import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const BASE_DIR = path.resolve(__dirname, "../../uploads");

interface ArquivoSalvo {
  nomeArquivo: string;
  caminho: string;
}

class LocalStorageService {
  async salvar(buffer: Buffer, nomeOriginal: string, subpasta: string): Promise<ArquivoSalvo> {
    const extensao = path.extname(nomeOriginal);
    const nomeArquivo = `${crypto.randomUUID()}${extensao}`;
    const pastaDestino = path.join(BASE_DIR, subpasta);

    await fs.mkdir(pastaDestino, { recursive: true });

    const caminhoCompleto = path.join(pastaDestino, nomeArquivo);
    await fs.writeFile(caminhoCompleto, buffer);

    return {
      nomeArquivo,
      caminho: path.join(subpasta, nomeArquivo),
    };
  }

  async remover(caminhoRelativo: string): Promise<void> {
    const caminhoCompleto = path.join(BASE_DIR, caminhoRelativo);
    await fs.unlink(caminhoCompleto).catch(() => {});
  }

  resolverCaminhoAbsoluto(caminhoRelativo: string): string {
    return path.join(BASE_DIR, caminhoRelativo);
  }
}

export const storageService = new LocalStorageService();