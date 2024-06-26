import { Request, Response } from "express";
import { DeleteUserService } from "../../services/users/DeleteUserService";


export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteUserService()

    const result = await service.execute({id});

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json("Usuario excluido");
  }
}