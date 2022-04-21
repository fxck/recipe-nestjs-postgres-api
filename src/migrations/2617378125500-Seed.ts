import { MigrationInterface, QueryRunner } from 'typeorm';

export class Seed2617378125500 implements MigrationInterface {
  name = 'Seed2617378125500';

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Seed Up:', queryRunner);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Seed Down:', queryRunner);
  }
}
