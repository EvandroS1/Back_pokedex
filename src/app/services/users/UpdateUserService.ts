import { AppDataSource } from "../../../database/data-source";
import User from "../../entities/User";

type userUpdateRequest = {
  id: string;
  name: string;
  password: string;
  email: string;
  sexo?: boolean;
  celphone?: string;
};

export class updateUserService {
  async execute({
    id,
    name,
    password,
    email,
    sexo,
    celphone,
  }: userUpdateRequest) {
    const repo = AppDataSource.getRepository(User);

    const user = await repo.findOne({
        where: { id: (id) },
    });

    if (!user) {
      return new Error("Usuário não existe!");
    }

    user.name = name ? name : user.name;
    user.password = password ? password : user.password;
    user.email = email ? email : user.email;
    user.sexo = sexo ? sexo : user.sexo;
    user.celphone = celphone ? celphone : user.celphone;

    await repo.save(user);

    return user;
  }
}
