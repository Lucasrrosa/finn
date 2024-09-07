import { MigrationInterface, QueryRunner } from "typeorm";

export class TabelasTransacaoBancaria1725653973966 implements MigrationInterface {
    name = 'TabelasTransacaoBancaria1725653973966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "allfreedocategoria_transacao_entity" (
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "descricao" character varying NOT NULL,
                "usuarioId" uuid NOT NULL,
                CONSTRAINT "PK_b9c201eb512577b86313527d337" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TYPE "public"."allfreedotransacao_entity_tipo_enum" AS ENUM('DESPESA', 'RECEITA')
        `);
        await queryRunner.query(`
            CREATE TABLE "allfreedotransacao_entity" (
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "descricao" character varying NOT NULL,
                "valor" numeric NOT NULL,
                "data" date NOT NULL,
                "computado" boolean NOT NULL DEFAULT false,
                "tipo" "public"."allfreedotransacao_entity_tipo_enum" NOT NULL,
                "usuarioId" uuid NOT NULL,
                "contaBancariaId" uuid NOT NULL,
                CONSTRAINT "PK_792af29128bb2ad80b917f99daa" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "allfreedotransacao_entity_categorias_categoria_transacao_entity" (
                "transacaoEntityId" uuid NOT NULL,
                "categoriaTransacaoEntityId" uuid NOT NULL,
                CONSTRAINT "PK_dca15ddf5061fe8b865c05cd259" PRIMARY KEY (
                    "transacaoEntityId",
                    "categoriaTransacaoEntityId"
                )
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_5ec91bd48a5dafb5f509118e05" ON "allfreedotransacao_entity_categorias_categoria_transacao_entity" ("transacaoEntityId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_f71e14ee4c804d8ec3eab00887" ON "allfreedotransacao_entity_categorias_categoria_transacao_entity" ("categoriaTransacaoEntityId")
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedocategoria_transacao_entity"
            ADD CONSTRAINT "FK_be8ee7ea00d3f032c09a11009c1" FOREIGN KEY ("usuarioId") REFERENCES "allfreedousuario_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity"
            ADD CONSTRAINT "FK_e14642253aa49dada68142beb29" FOREIGN KEY ("usuarioId") REFERENCES "allfreedousuario_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity"
            ADD CONSTRAINT "FK_0a090d9afea1dc8fd2a844a95dd" FOREIGN KEY ("contaBancariaId") REFERENCES "allfreedoconta_bancaria_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity_categorias_categoria_transacao_entity"
            ADD CONSTRAINT "FK_5ec91bd48a5dafb5f509118e058" FOREIGN KEY ("transacaoEntityId") REFERENCES "allfreedotransacao_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity_categorias_categoria_transacao_entity"
            ADD CONSTRAINT "FK_f71e14ee4c804d8ec3eab008879" FOREIGN KEY ("categoriaTransacaoEntityId") REFERENCES "allfreedocategoria_transacao_entity"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity_categorias_categoria_transacao_entity" DROP CONSTRAINT "FK_f71e14ee4c804d8ec3eab008879"
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity_categorias_categoria_transacao_entity" DROP CONSTRAINT "FK_5ec91bd48a5dafb5f509118e058"
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity" DROP CONSTRAINT "FK_0a090d9afea1dc8fd2a844a95dd"
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity" DROP CONSTRAINT "FK_e14642253aa49dada68142beb29"
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedocategoria_transacao_entity" DROP CONSTRAINT "FK_be8ee7ea00d3f032c09a11009c1"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_f71e14ee4c804d8ec3eab00887"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_5ec91bd48a5dafb5f509118e05"
        `);
        await queryRunner.query(`
            DROP TABLE "allfreedotransacao_entity_categorias_categoria_transacao_entity"
        `);
        await queryRunner.query(`
            DROP TABLE "allfreedotransacao_entity"
        `);
        await queryRunner.query(`
            DROP TYPE "public"."allfreedotransacao_entity_tipo_enum"
        `);
        await queryRunner.query(`
            DROP TABLE "allfreedocategoria_transacao_entity"
        `);
    }

}
