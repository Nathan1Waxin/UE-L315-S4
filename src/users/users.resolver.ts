import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { Users } from './schemas/users.schema';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';


@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => [Users])
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  @Query(() => [Users], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => Users, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => Users)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => Users)
  removeUser(@Args('id', { type: () => Int }) id: string) {
    return this.usersService.remove(id);
  }
}
