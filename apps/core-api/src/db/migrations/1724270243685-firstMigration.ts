import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigration1724270243685 implements MigrationInterface {
    name = 'FirstMigration1724270243685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "allfreedousuario_entity" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "nome" character varying NOT NULL,
                "email" character varying NOT NULL,
                "authId" character varying NOT NULL,
                CONSTRAINT "UQ_3bfdd9163446e4b9acbd9c349bf" UNIQUE ("email"),
                CONSTRAINT "UQ_cb716f68fc2b940adb1f62fab94" UNIQUE ("authId"),
                CONSTRAINT "PK_aa11942bb007ab74df80b3e5505" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "allfreedousuario_entity"
        `);
    }

}
