import { Connection, MigrationInterface, QueryRunner } from 'typeorm';

export class DataSeed1650618572472 implements MigrationInterface {
  name = 'DataSeed1650618572472';

  constructor(private readonly _connection: Connection) {}

  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('... TypeORM: Seed Up Data');
    const dataSeed = JSON.parse(process.env.ZEROPS_RECIPE_DATA_SEED || '[]');
    const migrations = await queryRunner.query('SELECT * FROM migrationss');
    // if (migrations?.length === 0 && !!dataSeed?.length) {

    // }
    console.log('... TypeORM: Migrations:', migrations);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Seed Down:', queryRunner);
  }
}
