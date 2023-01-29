import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int)
  id: string;
  @Field(()=> String)
  firstname: string;
  @Field(()=> String)
  lastname: string;
  @Field(()=> String)
  email: string;
  @Field(()=> String)
  password: string;
}
