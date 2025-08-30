import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "../api/models/User";

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: "mongodb://localhost:27017/user-management-db",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
});