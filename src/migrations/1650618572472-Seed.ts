import { Connection, MigrationInterface, QueryRunner } from 'typeorm';

export class Seed2617378125500 implements MigrationInterface {
  name = 'Seed2617378125500';

  constructor(private readonly _connection: Connection) {}

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('Seed Up:', queryRunner, this._connection);
    // await queryRunner.query('SELECT * FROM migrations');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Seed Down:', queryRunner);
  }
}
