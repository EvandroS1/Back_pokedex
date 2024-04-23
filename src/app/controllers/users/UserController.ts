import { Router } from "express";
import { UpdateUserController } from "./UpdateUserController";
import { DeleteUserController } from "./DeleteUserController"; 
import { CreateUserController } from "./CreateUserController";
import { GetAllUsersController } from "./GetAllUsersController";

const userRouter = Router();

userRouter.post('/', new CreateUserController().handle);

userRouter.get('/', new GetAllUsersController().handle);

userRouter.put('/:id', new UpdateUserController().handle);

userRouter.delete('/:id', new DeleteUserController().handle);



export default userRouter;