import { Todo } from './entities/todo.entity';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo) private todosRepository: typeof Todo) {}

  create(createTodoDto: CreateTodoDto) {
    return this.todosRepository.create(createTodoDto);
  }

  findAll() {
    return this.todosRepository.findAll();
  }

  findOne(id: number) {
    return this.todosRepository.findOne({ where: { id } });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todosRepository.update(updateTodoDto, { where: { id } });
  }

  remove(id: number) {
    return this.todosRepository.destroy({ where: { id } });
  }
}
