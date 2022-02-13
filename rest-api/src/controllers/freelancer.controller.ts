import { repository } from "@loopback/repository";
import { FreelancerRepository } from "../repositories";
import { Freelancer } from "../models";
import { getModelSchemaRef, post, requestBody } from "@loopback/rest";

export class FreelancerController {
  constructor(
    @repository(FreelancerRepository) public freelancerRepository: FreelancerRepository
  ) {
  }

  @post("/freelancer", {
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
        'application/json': {
          schema: getModelSchemaRef(Freelancer, {
            title: 'NewTodo',
            exclude: ['id'],
          }),
        },
      },
    })
      freelancer: Omit<Freelancer, 'id'>,
  ): Promise<Freelancer> {
    return this.freelancerRepository.create(freelancer);
  }
}