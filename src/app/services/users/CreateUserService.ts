import { AppDataSource } from "../../../database/data-source";
import User from "../../entities/User";

type userCreateRequest = {
  name: string;
  password: string;
  email: string;
  sexo?: boolean;
  celphone?: string;
};

export class CreateUserService {
  async execute({ name, password, email, sexo, celphone }: userCreateRequest) {
    const repo = AppDataSource.getRepository(User);

    const user = await repo.findOne({
      where: { email: email },
    });

    if (user) {
      return new Error("Email já cadastrado!");
    }

    const newUser = repo.create({
      name,
      password,
      email,
      sexo,
      celphone
    });

    await repo.save(newUser);

    return newUser;
  }
}
