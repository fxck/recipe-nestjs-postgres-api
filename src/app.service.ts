import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { EntityManager, Connection } from 'typeorm';
import { Todo } from './todos/todos.entity';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(
    private readonly entityManager: EntityManager,
    private readonly connection: Connection,
  ) {}
  onApplicationBootstrap() {
    this.seed(JSON.parse(process.env.ZEROPS_RECIPE_DATA_SEED || '[]'));
    
  //  setInterval(() => {
  //     console.log(getRandomInt(1, 1000000));
  //  }, 500);
  }

  async seed(data: string[]) {
    const seeded = await this.entityManager.query(
      `SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'todo');`,
    );

    if (seeded?.[0]?.exists === false && !!data?.length) {
      console.log('Seeding data for Zerops recipe ⏳');
      await this.connection.synchronize();
      await this.entityManager.save(
        Todo,
        data.map((text) => ({ text })),
      );
      console.log('Done ✅');
    }
  }
}
