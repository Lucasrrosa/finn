import { MigrationInterface, QueryRunner } from "typeorm";

export class TabelaContaBancaria1725650448754 implements MigrationInterface {
    name = 'TabelaContaBancaria1725650448754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "allfreedoconta_bancaria_entity" (
                "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
                "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
                "deletedAt" TIMESTAMP,
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying NOT NULL,
                "saldoInicial" numeric NOT NULL,
                "saldoAtual" numeric NOT NULL,
                "usuarioId" uuid NOT NULL,
                CONSTRAINT "UQ_5ab750c4d0d518334f3df987020" UNIQUE ("nome", "usuarioId"),
                CONSTRAINT "PK_a2e377e6648830e66c70a251e2c" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "allfreedoconta_bancaria_entity"
            ADD CONSTRAINT "FK_773b919f621c67afc53dacad6be" FOREIGN KEY ("usuarioId") REFERENCES "allfreedousuario_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "allfreedoconta_bancaria_entity" DROP CONSTRAINT "FK_773b919f621c67afc53dacad6be"
        `);
        await queryRunner.query(`
            DROP TABLE "allfreedoconta_bancaria_entity"
        `);
    }

}
