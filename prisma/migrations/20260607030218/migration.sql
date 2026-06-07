/*
  Warnings:

  - The primary key for the `_CargoToPermissoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_CargoToUsuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cargo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `cargo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `A` on the `_CargoToPermissoes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_CargoToUsuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cargo` on the `cargo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Cargos" AS ENUM ('ALUNO', 'PROFESSOR', 'ADMIN', 'DEPPI');

-- DropForeignKey
ALTER TABLE "_CargoToPermissoes" DROP CONSTRAINT "_CargoToPermissoes_A_fkey";

-- DropForeignKey
ALTER TABLE "_CargoToUsuario" DROP CONSTRAINT "_CargoToUsuario_A_fkey";

-- AlterTable
ALTER TABLE "_CargoToPermissoes" DROP CONSTRAINT "_CargoToPermissoes_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
ADD CONSTRAINT "_CargoToPermissoes_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "_CargoToUsuario" DROP CONSTRAINT "_CargoToUsuario_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" INTEGER NOT NULL,
ADD CONSTRAINT "_CargoToUsuario_AB_pkey" PRIMARY KEY ("A", "B");

-- AlterTable
ALTER TABLE "cargo" DROP CONSTRAINT "cargo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "cargo",
ADD COLUMN     "cargo" "Cargos" NOT NULL,
ADD CONSTRAINT "cargo_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "_CargoToUsuario" ADD CONSTRAINT "_CargoToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CargoToPermissoes" ADD CONSTRAINT "_CargoToPermissoes_A_fkey" FOREIGN KEY ("A") REFERENCES "cargo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
