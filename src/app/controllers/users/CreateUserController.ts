import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";


export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, password, email, sexo, celphone } = request.body;

    const service = new CreateUserService()

    const result = await service.execute({name, password, email, sexo, celphone});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}