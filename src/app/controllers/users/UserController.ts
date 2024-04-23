import { Request, Response, Router } from "express";
import userRepository from "../../repositories/userRepository";
import { UpdateUserController } from "./UpdateUserController";
import { DeleteUserController } from "./DeleteUserControoller";

const userRouter = Router();

userRouter.get('/', async (_req:Request, res:Response):Promise<Response> => {
  const users = await userRepository.getUsers();
  console.log('users', users)
  return res.status(200).json(users);
})

userRouter.post('/', async (req:Request, res:Response):Promise<Response> => {
  const user = await userRepository.postUsers(req.body);
  console.log('users', user)
  return res.status(200).json(user);
})

userRouter.put('/:id', new UpdateUserController().handle);

userRouter.delete('/:id', new DeleteUserController().handle);


export default userRouter;