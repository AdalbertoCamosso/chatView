-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "tecnobanturh";

-- CreateEnum
CREATE TYPE "public"."Genero" AS ENUM ('MASCULINO', 'FEMENINO');

-- CreateEnum
CREATE TYPE "public"."Estado_Civil" AS ENUM ('SOLTEIRO', 'CASADO', 'DIVORCIADO', 'VIUVO', 'UNIAO_DE_FACTO');

-- CreateEnum
CREATE TYPE "public"."Raca" AS ENUM ('NEGRA', 'BRANCA', 'MESTICA');

-- CreateEnum
CREATE TYPE "public"."NIVEL_ACADEMICO" AS ENUM ('NAO_FREQUENTADO', 'ENSINO_BASE', 'ENSINO_MEDIO', 'LICENCIADO', 'MESTRE', 'PHD');

-- CreateEnum
CREATE TYPE "public"."Identificacao" AS ENUM ('ASSENTO_DE_NASCIMENTO', 'BILHETE_DE_IDENTIDADE', 'PASSAPORTE', 'CARTAO_DE_RESIDENTE', 'CEDULA', 'CARTA_DE_CONDUCAO', 'NIF');

-- CreateEnum
CREATE TYPE "public"."Nivel_Economico" AS ENUM ('BAIXA', 'MEDIA', 'ALTA');

-- CreateEnum
CREATE TYPE "public"."Tipo_entidade" AS ENUM ('SINGULAR', 'COLECTIVO');

-- CreateEnum
CREATE TYPE "public"."Tipo_Movimento" AS ENUM ('ENTRADA', 'SAIDA');

-- CreateEnum
CREATE TYPE "public"."Tipo_Estado" AS ENUM ('ACTIVO', 'REMOVIDO');

-- CreateEnum
CREATE TYPE "public"."Tipo_Documento" AS ENUM ('FACTURA', 'RECIBO', 'NOTA_DE_ENTREGA', 'OUTRO');

-- CreateEnum
CREATE TYPE "public"."Familia_Artigo" AS ENUM ('PRODUTO', 'SERVICO');

-- CreateEnum
CREATE TYPE "public"."Tipo_Regular" AS ENUM ('RUPTURA', 'REAJUSTE');

-- CreateEnum
CREATE TYPE "public"."Tipo_Desconto" AS ENUM ('COMERCIAL', 'FINANCEIRO', 'DIVERSO', 'NENHUM');

-- CreateEnum
CREATE TYPE "public"."Status" AS ENUM ('Submetido', 'Aprovado', 'Rejeitado', 'Requerido');

-- CreateEnum
CREATE TYPE "public"."TipoAvaliacao" AS ENUM ('Auto_Avaliacao', 'Departamento');

-- CreateEnum
CREATE TYPE "public"."Criterio" AS ENUM ('Comportamental', 'Tecnico');

-- CreateEnum
CREATE TYPE "public"."Tipo" AS ENUM ('livro', 'cientifico', 'outro');

-- CreateEnum
CREATE TYPE "public"."Contrato" AS ENUM ('CTD', 'CAP');

-- CreateEnum
CREATE TYPE "public"."NIVEL_ACADEMICO_RH" AS ENUM ('Base', 'Medio', 'Universitario', 'Licenciado', 'Mestrado', 'Doctoramento');

-- CreateEnum
CREATE TYPE "public"."Identificacao_RH" AS ENUM ('BI', 'Passaporte', 'Residente', 'Outro');

-- CreateEnum
CREATE TYPE "public"."Regime" AS ENUM ('geral', 'especial');

-- CreateEnum
CREATE TYPE "public"."Genero_RH" AS ENUM ('masculino', 'feminino');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "is_super_admin" BOOLEAN NOT NULL DEFAULT false,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "funcionarioId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Utente" (
    "id" SERIAL NOT NULL,
    "num_processo" INTEGER,
    "num_processo_anterior" INTEGER,
    "nome_pai" TEXT,
    "nome_mae" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "genero" "public"."Genero" NOT NULL,
    "estado_civil" "public"."Estado_Civil" NOT NULL,
    "raca" "public"."Raca" NOT NULL,
    "albinismo" BOOLEAN NOT NULL DEFAULT false,
    "nivel_academico" "public"."NIVEL_ACADEMICO",
    "nivel_economico" "public"."Nivel_Economico",
    "profissao" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paisId" INTEGER,
    "provinciaId" INTEGER,
    "municipioId" INTEGER,
    "clienteId" INTEGER,

    CONSTRAINT "Utente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Laboratorio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Laboratorio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tipo_exame" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "laboratorioId" INTEGER,

    CONSTRAINT "Tipo_exame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Exame" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL,
    "tipo_exameId" INTEGER NOT NULL,
    "laboratorioId" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Exame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Pais" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,

    CONSTRAINT "Pais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Provincia" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "paisId" INTEGER,

    CONSTRAINT "Provincia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Municipio" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "provinciaId" INTEGER,

    CONSTRAINT "Municipio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Permission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Permission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserRoles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "rolesId" INTEGER,

    CONSTRAINT "UserRoles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."RolesPermission" (
    "id" SERIAL NOT NULL,
    "permissionId" INTEGER,
    "rolesId" INTEGER,

    CONSTRAINT "RolesPermission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tipo_Professional_Clinico" (
    "id" SERIAL NOT NULL,
    "tipo_profissional" TEXT NOT NULL,

    CONSTRAINT "Tipo_Professional_Clinico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Sala_atendimento" (
    "id" SERIAL NOT NULL,
    "sala" TEXT NOT NULL,

    CONSTRAINT "Sala_atendimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Entidade" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo_entidade" "public"."Tipo_entidade" NOT NULL DEFAULT 'SINGULAR',
    "tipo_identificacao" "public"."Identificacao",
    "identificacao" TEXT,
    "data_emissao" TIMESTAMP(3),
    "endereco" TEXT,

    CONSTRAINT "Entidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Fornecedor" (
    "id" SERIAL NOT NULL,
    "telefone" TEXT NOT NULL,
    "telefone_opcional" TEXT,
    "whatsapp" TEXT,
    "endereco" TEXT,
    "email" TEXT,
    "estado" "public"."Tipo_Estado" NOT NULL,
    "paisId" INTEGER,
    "entidadeId" INTEGER,

    CONSTRAINT "Fornecedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Unidade" (
    "id" SERIAL NOT NULL,
    "designacao" TEXT NOT NULL,

    CONSTRAINT "Unidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Categoria" (
    "id" SERIAL NOT NULL,
    "designacao" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Operacao_Movimento" (
    "id" SERIAL NOT NULL,
    "designacao" TEXT NOT NULL,
    "tipo" "public"."Tipo_Movimento" NOT NULL,

    CONSTRAINT "Operacao_Movimento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Artigo" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT,
    "stock_min" INTEGER,
    "stock_max" INTEGER,
    "preco" INTEGER,
    "familia" "public"."Familia_Artigo" NOT NULL,
    "estado" "public"."Tipo_Estado" NOT NULL,
    "unidadeId" INTEGER,
    "categoriaId" INTEGER,

    CONSTRAINT "Artigo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Local_Armazenamento" (
    "id" SERIAL NOT NULL,
    "designacao" TEXT NOT NULL,
    "efectua_saida" BOOLEAN NOT NULL,
    "funcionarioId" INTEGER,

    CONSTRAINT "Local_Armazenamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Entrada_Stock" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "efectua_saida" BOOLEAN NOT NULL,
    "tipo_documento" "public"."Tipo_Documento",
    "numero_documento" TEXT,
    "lote" INTEGER,
    "qtd_entrada" INTEGER,
    "qtd_saida" INTEGER,
    "caducado" BOOLEAN NOT NULL,
    "data_caducidade" TIMESTAMP(3),
    "fornecedorId" INTEGER,
    "operacaoMovimentoId" INTEGER,
    "artigoId" INTEGER,
    "localArmazenamentoId" INTEGER,

    CONSTRAINT "Entrada_Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Regular_Stock" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "tipo" "public"."Tipo_Regular" NOT NULL,
    "entradaStockId" INTEGER,

    CONSTRAINT "Regular_Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProfissionalClinico" (
    "id" SERIAL NOT NULL,
    "tipoProfessionalClinicoId" INTEGER,
    "funcionarioId" INTEGER,

    CONSTRAINT "ProfissionalClinico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AreaRequisicao" (
    "id" SERIAL NOT NULL,
    "designacao" TEXT NOT NULL,
    "funcionarioId" INTEGER,

    CONSTRAINT "AreaRequisicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."FuncionarioAreaRequisicao" (
    "id" SERIAL NOT NULL,
    "areaRequisicaoId" INTEGER,
    "funcionarioId" INTEGER,

    CONSTRAINT "FuncionarioAreaRequisicao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Cliente" (
    "id" SERIAL NOT NULL,
    "telefone" TEXT NOT NULL,
    "telefoneAlternativo" TEXT,
    "whatsapp" TEXT,
    "endereco" TEXT,
    "email" TEXT,
    "tipoDesconto" "public"."Tipo_Desconto",
    "valorDesconto" DOUBLE PRECISION,
    "percentagemDesconto" INTEGER,
    "efectuaDetencao" BOOLEAN NOT NULL,
    "saldo" DOUBLE PRECISION NOT NULL,
    "limiteSaldo" DOUBLE PRECISION NOT NULL,
    "limiteCredito" DOUBLE PRECISION NOT NULL,
    "estado" "public"."Tipo_Estado" NOT NULL,
    "entidadeId" INTEGER NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."funcionario" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "nomePai" TEXT NOT NULL,
    "nomeMae" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "genero" "public"."Genero_RH" NOT NULL,
    "tipo_identificacao" "public"."Identificacao_RH" NOT NULL,
    "num_identificacao" TEXT NOT NULL,
    "nivel_academico" "public"."NIVEL_ACADEMICO_RH" NOT NULL,
    "avatar" TEXT,
    "telefone1" TEXT NOT NULL,
    "telefone2" TEXT,
    "linkedin" TEXT,
    "whatsApp" TEXT,
    "instagram" TEXT,
    "bairro" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "funcaoId" INTEGER,
    "categoriaId" INTEGER,
    "numeroConta" TEXT,
    "iban" TEXT,
    "bancoId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcionario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."carreira" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "regime" "public"."Regime" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "carreira_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."subcarreira" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "carreiraId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subcarreira_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "salario_base" DOUBLE PRECISION NOT NULL,
    "carreiraId" INTEGER,
    "subCarreiraId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."funcao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."banco" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "banco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."DadosProfissionais" (
    "id" SERIAL NOT NULL,
    "data_admissao" TIMESTAMP(3) NOT NULL,
    "numeroDespacho" TEXT,
    "data_despacho" TIMESTAMP(3) NOT NULL,
    "contrato" "public"."Contrato" NOT NULL,
    "funcionarioId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DadosProfissionais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."formacoes" (
    "id" SERIAL NOT NULL,
    "ano_inicio" TIMESTAMP(3) NOT NULL,
    "ano_termino" TIMESTAMP(3) NOT NULL,
    "formacao" TEXT NOT NULL,
    "pais" TEXT NOT NULL,
    "instituicao" TEXT NOT NULL,
    "funcionarioId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "formacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."publicacoes" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "entidade" TEXT NOT NULL,
    "ano" TIMESTAMP(3) NOT NULL,
    "tipo" "public"."Tipo" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "publicacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."ExperiencialLaboral" (
    "id" SERIAL NOT NULL,
    "ano_inicio" TIMESTAMP(3) NOT NULL,
    "ano_termino" TIMESTAMP(3) NOT NULL,
    "funcao" TEXT NOT NULL,
    "instituicao" TEXT NOT NULL,
    "pais" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "funcionarioId" INTEGER,

    CONSTRAINT "ExperiencialLaboral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."Departamento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "Id_funcionario_chefe" INTEGER,
    "Id_funcionario_supervisor" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."FuncionarioDepartamento" (
    "id" SERIAL NOT NULL,
    "departamentoId" INTEGER,
    "funcionarioId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FuncionarioDepartamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."fichaAvaliacao" (
    "id" SERIAL NOT NULL,
    "nome_ficha" TEXT NOT NULL,
    "objetivo" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "fichaAvaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."Competencia" (
    "id" SERIAL NOT NULL,
    "nome_competencia" TEXT NOT NULL,
    "criterio" "public"."Criterio" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Competencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."PerguntaFichaAvaliacao" (
    "id" SERIAL NOT NULL,
    "competenciaId" INTEGER,
    "fichaAvaliacaoId" INTEGER,
    "descricao" TEXT NOT NULL,
    "nivel_esperado" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PerguntaFichaAvaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tecnobanturh"."Avaliacao" (
    "id" SERIAL NOT NULL,
    "id_funcionario_avaliador" INTEGER,
    "id_fichaAvaliacao" INTEGER,
    "id_departamento" INTEGER,
    "Tipo_Avaliacao" "public"."TipoAvaliacao" NOT NULL,
    "status" "public"."Status" NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comentario" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."enfermaria" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "localizacao" TEXT,

    CONSTRAINT "enfermaria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cama" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "enfermariaId" INTEGER,

    CONSTRAINT "cama_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Utente_num_processo_key" ON "public"."Utente"("num_processo");

-- CreateIndex
CREATE UNIQUE INDEX "Utente_num_processo_anterior_key" ON "public"."Utente"("num_processo_anterior");

-- CreateIndex
CREATE UNIQUE INDEX "Laboratorio_nome_key" ON "public"."Laboratorio"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_exame_nome_key" ON "public"."Tipo_exame"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Exame_nome_key" ON "public"."Exame"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Pais_nome_key" ON "public"."Pais"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Provincia_nome_key" ON "public"."Provincia"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Municipio_nome_key" ON "public"."Municipio"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Permission_name_key" ON "public"."Permission"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "public"."Roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tipo_Professional_Clinico_tipo_profissional_key" ON "public"."Tipo_Professional_Clinico"("tipo_profissional");

-- CreateIndex
CREATE UNIQUE INDEX "Sala_atendimento_sala_key" ON "public"."Sala_atendimento"("sala");

-- CreateIndex
CREATE UNIQUE INDEX "Unidade_designacao_key" ON "public"."Unidade"("designacao");

-- CreateIndex
CREATE UNIQUE INDEX "Categoria_designacao_key" ON "public"."Categoria"("designacao");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_email_key" ON "tecnobanturh"."funcionario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_telefone1_key" ON "tecnobanturh"."funcionario"("telefone1");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_telefone2_key" ON "tecnobanturh"."funcionario"("telefone2");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_numeroConta_key" ON "tecnobanturh"."funcionario"("numeroConta");

-- CreateIndex
CREATE UNIQUE INDEX "funcionario_iban_key" ON "tecnobanturh"."funcionario"("iban");

-- CreateIndex
CREATE UNIQUE INDEX "carreira_nome_key" ON "tecnobanturh"."carreira"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "fichaAvaliacao_nome_ficha_key" ON "tecnobanturh"."fichaAvaliacao"("nome_ficha");

-- CreateIndex
CREATE UNIQUE INDEX "Competencia_nome_competencia_key" ON "tecnobanturh"."Competencia"("nome_competencia");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Utente" ADD CONSTRAINT "Utente_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "public"."Pais"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Utente" ADD CONSTRAINT "Utente_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "public"."Provincia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Utente" ADD CONSTRAINT "Utente_municipioId_fkey" FOREIGN KEY ("municipioId") REFERENCES "public"."Municipio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Utente" ADD CONSTRAINT "Utente_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "public"."Cliente"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tipo_exame" ADD CONSTRAINT "Tipo_exame_laboratorioId_fkey" FOREIGN KEY ("laboratorioId") REFERENCES "public"."Laboratorio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Exame" ADD CONSTRAINT "Exame_tipo_exameId_fkey" FOREIGN KEY ("tipo_exameId") REFERENCES "public"."Tipo_exame"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Exame" ADD CONSTRAINT "Exame_laboratorioId_fkey" FOREIGN KEY ("laboratorioId") REFERENCES "public"."Laboratorio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Provincia" ADD CONSTRAINT "Provincia_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "public"."Pais"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Municipio" ADD CONSTRAINT "Municipio_provinciaId_fkey" FOREIGN KEY ("provinciaId") REFERENCES "public"."Provincia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserRoles" ADD CONSTRAINT "UserRoles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserRoles" ADD CONSTRAINT "UserRoles_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "public"."Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RolesPermission" ADD CONSTRAINT "RolesPermission_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "public"."Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."RolesPermission" ADD CONSTRAINT "RolesPermission_rolesId_fkey" FOREIGN KEY ("rolesId") REFERENCES "public"."Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Fornecedor" ADD CONSTRAINT "Fornecedor_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "public"."Pais"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Fornecedor" ADD CONSTRAINT "Fornecedor_entidadeId_fkey" FOREIGN KEY ("entidadeId") REFERENCES "public"."Entidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Artigo" ADD CONSTRAINT "Artigo_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "public"."Unidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Artigo" ADD CONSTRAINT "Artigo_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "public"."Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Local_Armazenamento" ADD CONSTRAINT "Local_Armazenamento_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Entrada_Stock" ADD CONSTRAINT "Entrada_Stock_fornecedorId_fkey" FOREIGN KEY ("fornecedorId") REFERENCES "public"."Fornecedor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Entrada_Stock" ADD CONSTRAINT "Entrada_Stock_operacaoMovimentoId_fkey" FOREIGN KEY ("operacaoMovimentoId") REFERENCES "public"."Operacao_Movimento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Entrada_Stock" ADD CONSTRAINT "Entrada_Stock_artigoId_fkey" FOREIGN KEY ("artigoId") REFERENCES "public"."Artigo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Entrada_Stock" ADD CONSTRAINT "Entrada_Stock_localArmazenamentoId_fkey" FOREIGN KEY ("localArmazenamentoId") REFERENCES "public"."Local_Armazenamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Regular_Stock" ADD CONSTRAINT "Regular_Stock_entradaStockId_fkey" FOREIGN KEY ("entradaStockId") REFERENCES "public"."Entrada_Stock"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProfissionalClinico" ADD CONSTRAINT "ProfissionalClinico_tipoProfessionalClinicoId_fkey" FOREIGN KEY ("tipoProfessionalClinicoId") REFERENCES "public"."Tipo_Professional_Clinico"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProfissionalClinico" ADD CONSTRAINT "ProfissionalClinico_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AreaRequisicao" ADD CONSTRAINT "AreaRequisicao_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FuncionarioAreaRequisicao" ADD CONSTRAINT "FuncionarioAreaRequisicao_areaRequisicaoId_fkey" FOREIGN KEY ("areaRequisicaoId") REFERENCES "public"."AreaRequisicao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."FuncionarioAreaRequisicao" ADD CONSTRAINT "FuncionarioAreaRequisicao_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Cliente" ADD CONSTRAINT "Cliente_entidadeId_fkey" FOREIGN KEY ("entidadeId") REFERENCES "public"."Entidade"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."funcionario" ADD CONSTRAINT "funcionario_funcaoId_fkey" FOREIGN KEY ("funcaoId") REFERENCES "tecnobanturh"."funcao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."funcionario" ADD CONSTRAINT "funcionario_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "tecnobanturh"."categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."funcionario" ADD CONSTRAINT "funcionario_bancoId_fkey" FOREIGN KEY ("bancoId") REFERENCES "tecnobanturh"."banco"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."subcarreira" ADD CONSTRAINT "subcarreira_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "tecnobanturh"."carreira"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."categoria" ADD CONSTRAINT "categoria_carreiraId_fkey" FOREIGN KEY ("carreiraId") REFERENCES "tecnobanturh"."carreira"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."categoria" ADD CONSTRAINT "categoria_subCarreiraId_fkey" FOREIGN KEY ("subCarreiraId") REFERENCES "tecnobanturh"."subcarreira"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."DadosProfissionais" ADD CONSTRAINT "DadosProfissionais_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."formacoes" ADD CONSTRAINT "formacoes_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."ExperiencialLaboral" ADD CONSTRAINT "ExperiencialLaboral_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."Departamento" ADD CONSTRAINT "Departamento_Id_funcionario_chefe_fkey" FOREIGN KEY ("Id_funcionario_chefe") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."Departamento" ADD CONSTRAINT "Departamento_Id_funcionario_supervisor_fkey" FOREIGN KEY ("Id_funcionario_supervisor") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."FuncionarioDepartamento" ADD CONSTRAINT "FuncionarioDepartamento_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "tecnobanturh"."Departamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."FuncionarioDepartamento" ADD CONSTRAINT "FuncionarioDepartamento_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."PerguntaFichaAvaliacao" ADD CONSTRAINT "PerguntaFichaAvaliacao_competenciaId_fkey" FOREIGN KEY ("competenciaId") REFERENCES "tecnobanturh"."Competencia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."PerguntaFichaAvaliacao" ADD CONSTRAINT "PerguntaFichaAvaliacao_fichaAvaliacaoId_fkey" FOREIGN KEY ("fichaAvaliacaoId") REFERENCES "tecnobanturh"."fichaAvaliacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."Avaliacao" ADD CONSTRAINT "Avaliacao_id_funcionario_avaliador_fkey" FOREIGN KEY ("id_funcionario_avaliador") REFERENCES "tecnobanturh"."funcionario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."Avaliacao" ADD CONSTRAINT "Avaliacao_id_fichaAvaliacao_fkey" FOREIGN KEY ("id_fichaAvaliacao") REFERENCES "tecnobanturh"."fichaAvaliacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tecnobanturh"."Avaliacao" ADD CONSTRAINT "Avaliacao_id_departamento_fkey" FOREIGN KEY ("id_departamento") REFERENCES "tecnobanturh"."Departamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cama" ADD CONSTRAINT "cama_enfermariaId_fkey" FOREIGN KEY ("enfermariaId") REFERENCES "public"."enfermaria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
