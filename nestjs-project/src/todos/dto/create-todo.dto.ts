import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly done: boolean;
}
