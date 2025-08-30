import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../api/models/User';

export const dataSource = new DataSource({
    // type: 'mongodb',
    // url: `${process.env.DB_HOST}${process.env.DB_NAME}`,
    // synchronize: true,
    // logging: true,
    // entities: [User],
    type: "mongodb",
    host: "localhost", // Or your MongoDB Atlas connection string host
    port: 27017, // Default MongoDB port
    database: "your_database_name",
    synchronize: true, // Auto-create collections based on entities (for development)
    logging: false, // Enable logging for queries
    entities: [User], // Register your TypeORM entities
    // For MongoDB Atlas, you might need additional options like ssl, authSource, etc.
    // driverExtra: {
    //     ssl: true,
    //     authSource: "admin",
    // },
});