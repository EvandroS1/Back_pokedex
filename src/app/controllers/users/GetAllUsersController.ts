import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/users/GetAllUsersService";


export class GetAllUsersController {
  async handle(_request: Request, response: Response) {

    const service = new GetAllUsersService()

    const result = await service.execute();

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}