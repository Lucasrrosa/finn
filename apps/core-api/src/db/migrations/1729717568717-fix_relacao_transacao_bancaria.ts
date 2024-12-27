import { MigrationInterface, QueryRunner } from "typeorm"

export class FixRelacaoTransacaoBancaria1729717568717 implements MigrationInterface {
    name = 'FixRelacaoTransacaoBancaria1729717568717'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity"
            ADD "categoriasId" uuid
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_5ec91bd48a5dafb5f509118e05"
            `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_f71e14ee4c804d8ec3eab00887"
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity_categorias_categoria_transacao_entity" DROP CONSTRAINT "FK_5ec91bd48a5dafb5f509118e058"
        `);
        await queryRunner.query(`
            DROP TABLE "allfreedotransacao_entity_categorias_categoria_transacao_entity"
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity"
            ADD CONSTRAINT "FK_5edeeea4a09fa9c79f3bd3ebe00" FOREIGN KEY ("categoriasId") REFERENCES "allfreedocategoria_transacao_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity" DROP CONSTRAINT "FK_5edeeea4a09fa9c79f3bd3ebe00"
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedotransacao_entity" DROP COLUMN "categoriasId"
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
    }

}
