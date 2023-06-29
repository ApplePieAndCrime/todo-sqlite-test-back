import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './../users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [SequelizeModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService],
  exports: [TodosService],
})
export class TodosModule {}
