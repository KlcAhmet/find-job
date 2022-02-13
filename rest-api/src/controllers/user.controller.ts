import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories";
import { User } from "../models";
import { getModelSchemaRef, post, requestBody } from "@loopback/rest";

const config = {
  base: "/user"
};

export class UserController {
  constructor(
    @repository(UserRepository) public userRepository: UserRepository
  ) {
  }

  @post(`${config.base}/register`)
  async register(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(User, { exclude: ["id"] })
        }
      }
    })
      user: Omit<User, "id">
  ): Promise<object> {
    await this.userRepository.create(user);
    return {
      message: "User created"
    }
  }
}