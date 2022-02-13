import { repository } from "@loopback/repository";
import { FreelancerRepository, UserRepository } from "../repositories";
import { Freelancer } from "../models";
import { getModelSchemaRef, post, requestBody } from "@loopback/rest";

const config = {
  base: "/freelancer"
};

export class FreelancerController {
  constructor(
    @repository(FreelancerRepository) public freelancerRepository: FreelancerRepository,
    @repository(UserRepository) public userRepository: UserRepository
  ) {
  }

  @post(`${config.base}`, {
    responses: {
      "200": {
        description: "Todo model instance",
        content: { "application/json": { schema: getModelSchemaRef(Freelancer) } }
      }
    }
  })
  async create(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Freelancer, { exclude: ["id"] })
        }
      }
    })
      freelancer: Omit<Freelancer, "id">
  ): Promise<object> {
    await this.freelancerRepository.create(freelancer);
    // todo buraya throw Error midware gelecek
    return {
      message: "User created"
    };
  }
}