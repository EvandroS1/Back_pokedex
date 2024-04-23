import { Request, Response } from "express";
import { updateUserService } from "../../services/users/UpdateUserService";


export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, password, email, sexo, celphone } = request.body;

    const service = new updateUserService()

    const result = await service.execute({id, name, password, email, sexo, celphone});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}