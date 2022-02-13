import { Entity, model, property } from "@loopback/repository";

@model({
  settings: {
    strictObjectIDCoercion: true
  }
})
export class User extends Entity {
  @property({
    type: "string",
    id: true,
    mongodb: { dataType: "ObjectId" }
  })
  id: string;

  @property({
    required: true
  })
  mail: string;

  @property({
    required: true,
    hidden: true
  })
  password: string;

  @property({
    required: true
  })
  type: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}