import { DefaultCrudRepository } from "@loopback/repository";
import { Freelancer } from "../models";
import { MongoDB } from "../datasources";
import { inject } from "@loopback/core";

export class FreelancerRepository extends DefaultCrudRepository<Freelancer,
  typeof Freelancer.prototype.id> {
  constructor(@inject("datasources.db") dataSource: MongoDB) {
    super(Freelancer, dataSource);
  }
}