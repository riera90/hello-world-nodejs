import { Todo } from '../interfaces/todo.interface';

export class CreateTodoDto implements Todo {
  readonly name;
  readonly description;
  readonly done;
}
