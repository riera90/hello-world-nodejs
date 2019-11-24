import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { TODOS } from './mocks/todos.mock';

@Injectable()
export class TodosService {
  private readonly todos: Todo[] = TODOS;

  create(todo: Todo) {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return this.todos;
  }
}
