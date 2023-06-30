import { IOptions } from './../helpers/types';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Query } from '@nestjs/common/decorators/http/route-params.decorator';
import { FindOptions } from 'sequelize';
import { Todo } from './entities/todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    console.log({ createTodoDto });
    return this.todosService.create(createTodoDto);
  }

  @Get('/count')
  count(@Query() options: FindOptions<Todo>) {
    return this.todosService.count(options);
  }

  @Get()
  findAll(@Query() options: FindOptions<Todo>) {
    return this.todosService.findAll(options);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    console.log({ updateTodoDto });
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}
