import { AppDataSource } from "../../../database/data-source";
import User from "../../entities/User";

export class GetAllUsersService {
  async execute() {
    const repo = AppDataSource.getRepository(User);

    const user = await repo.find();

    await repo.save(user);

    return user;
  }
}
