/*
  Warnings:

  - You are about to drop the column `categoria` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `estoque` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `categoriaId` to the `Produto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estoqueId` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "categoria",
DROP COLUMN "estoque",
ADD COLUMN     "categoriaId" INTEGER NOT NULL,
ADD COLUMN     "estoqueId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stoque" (
    "id" SERIAL NOT NULL,
    "nome" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Stoque_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_estoqueId_fkey" FOREIGN KEY ("estoqueId") REFERENCES "Stoque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
