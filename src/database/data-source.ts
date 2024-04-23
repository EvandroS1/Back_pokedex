import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUser1713360571457 } from "../migration/1713360571457-CreateUser"
import User from "../app/entities/User"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "pokedex",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUser1713360571457],
    subscribers: [],
})
