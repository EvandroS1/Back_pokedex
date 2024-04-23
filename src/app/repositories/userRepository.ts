import User from "../entities/User";
import Iuser from "../interfaces/Iuser";
import { AppDataSource } from "../../database/data-source";
// import { Request, Response } from "express";

const userReposittory = AppDataSource.getRepository(User);

const getUsers = ():Promise<Iuser[]>  => {
  return userReposittory.find();

}

const postUsers = (data:Iuser[]):Promise<Iuser[]> => {
  // const  { name, password, email, sexo, celphone, created_at } = data.body
  return userReposittory.save(data)

}


export default { getUsers, postUsers, userReposittory}