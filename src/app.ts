import express from 'express';
import * as bodyParser from "body-parser";
import { createExpressServer } from 'routing-controllers';

import { UserController } from './api/controllers/UserController';
import { AppDataSource } from "./db/data-source";

const port = 3000;
const app = createExpressServer({
    controllers: [UserController],
});

app.use(express.json());
AppDataSource.initialize().then(() => {
    app.use(bodyParser.json());
    console.log("Data Source has been initialized!");
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch((error) => {
    console.error("Error during Data Source initialization:", error);
});
