import {
  Connection,
  EntityManager,
  MigrationInterface,
  QueryRunner,
} from 'typeorm';
import { Todo } from '../todos/todos.entity';

export class DataSeed1650618572472 implements MigrationInterface {
  name = 'DataSeed1650618572472';

  constructor(
    private readonly _connection: Connection,
    private readonly _entityManager: EntityManager,
  ) {}

  public async up(queryRunner: QueryRunner): Promise<void> {
    const dataSeed = JSON.parse(process.env.ZEROPS_RECIPE_DATA_SEED || '[]');
    const migrations = await queryRunner.query('SELECT * FROM migrations');
    if (migrations.length === 0) {
      console.log('... queryRunner:', queryRunner);
      console.log('... EntityManager:', this._entityManager);
      /*
      await this._connection.synchronize();
      console.log('Seeding data for the Zerops recipe ⏳');
      if (!!dataSeed?.length) {
        await this._entityManager.save(
          Todo,
          dataSeed.map((text) => ({ text })),
        );
        console.log('Done ✅');
      } else {
        console.log('Done ✅');
      }
      */
    } else {
      console.log('Seeding data for the Zerops recipe was skipped.');
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('Clearing data for the Zerops recipe ⏳');
    await this._entityManager.clear(Todo);
    console.log('Done ✅');
  }
}
