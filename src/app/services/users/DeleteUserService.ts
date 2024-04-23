import { AppDataSource } from "../../../database/data-source";
import User from "../../entities/User";

type userDeleteRequest = {
  id: string;
};

export class DeleteUserService {
  async execute({ id }: userDeleteRequest) {
    const repo = AppDataSource.getRepository(User);


    
    if (!await repo.findOne({where: { id: id },})) {
      return new Error("Usuário não existe!");
    }

    await repo.delete(id);

    return;
  }
}
