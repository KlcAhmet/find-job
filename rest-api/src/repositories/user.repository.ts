import { DefaultCrudRepository } from "@loopback/repository";
import { User } from "../models";
import { MongoDB } from "../datasources";
import { inject } from "@loopback/core";

export class UserRepository extends DefaultCrudRepository<User,
  typeof User.prototype.id> {
  constructor(@inject("datasources.db") dataSource: MongoDB) {
    super(User, dataSource);
  }
}