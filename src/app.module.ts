import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      autoLoadEntities: true,
      // synchronize: true,
      migrationsRun: true,
      migrations: ['./dist/migrations/*{.js}'],
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
    TodosModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
