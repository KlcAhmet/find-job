import { Entity, model, property } from "@loopback/repository";

@model()
export class Private extends Entity {
  @property({
    required: true
  })
  password: string;

  @property() refreshToken: string;
}

@model()
export class Other extends Entity {
  @property({
    required: true
  })
  header: string;

  @property({
    required: true
  })
  description: string;
}

@model()
export class Jobs extends Entity {
  @property({
    type: "array",
    itemType: "string"
  })
  offeredJobs: string[];
}

@model()
export class Information extends Entity {
  @property({
    required: true
  })
  name: string;

  @property({
    required: true
  })
  surname: string;

  @property({
    required: true
  })
  email: string;

  @property({
    required: true
  })
  phoneNumber: string;

  @property({
    type: "array",
    itemType: "object"
  })
  other: Other[];
}

@model({
  settings: {
    strictObjectIDCoercion: true
  }
})
export class Freelancer extends Entity {
  @property({
    type: "string",
    id: true,
    mongodb: { dataType: "ObjectId" }
  })
  id: string;

  @property() type: string;

  @property()
  private: Private;

  @property()
  information: Information;

  @property()
  jobs: Jobs;

  constructor(data?: Partial<Freelancer>) {
    super(data);
  }
}