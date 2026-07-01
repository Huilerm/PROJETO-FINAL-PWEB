import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

const BASE_DIR = path.resolve(process.cwd(), "uploads");

interface ArquivoSalvo {
  nomeArquivo: string;
  caminho: string;
}

class LocalStorageService {
  async salvar(caminhoTemp: string, nomeOriginal: string, subpasta: string): Promise<ArquivoSalvo> {
    const extensao = path.extname(nomeOriginal);
    const nomeArquivo = `${crypto.randomUUID()}${extensao}`;
    
    const pastaDestino = path.resolve(BASE_DIR, subpasta);

    await fs.mkdir(pastaDestino, { recursive: true });

    const caminhoCompleto = path.join(pastaDestino, nomeArquivo);

    await fs.copyFile(caminhoTemp, caminhoCompleto);
    await fs.unlink(caminhoTemp).catch(() => {});

    const caminhoRelativo = path.join(subpasta, nomeArquivo).replace(/\\/g, "/");

    return {
      nomeArquivo,
      caminho: path.join(subpasta, nomeArquivo),
    };
  }

  async remover(caminhoRelativo: string): Promise<void> {
    const caminhoCompleto = path.isAbsolute(caminhoRelativo) ? caminhoRelativo : path.join(BASE_DIR, caminhoRelativo);
    await fs.unlink(caminhoCompleto).catch(() => {});
  }

  resolverCaminhoAbsoluto(caminhoRelativo: string): string {
    if (path.isAbsolute(caminhoRelativo)) {
      return caminhoRelativo;
    }

    return path.join(BASE_DIR, caminhoRelativo);
  }
}

export const storageService = new LocalStorageService();