import { ApiModelProperty } from '@nestjs/swagger';
import { Todo } from '../interfaces/todo.interface';

export class CreateTodoDto implements Todo {
  @ApiModelProperty()
  readonly name;

  @ApiModelProperty()
  readonly description;

  @ApiModelProperty()
  readonly done;
}
