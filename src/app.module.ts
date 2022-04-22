import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(), TodosModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
