import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from '../api/models/User';

export const dataSource = new DataSource({
    type: 'mongodb',
    url: `${process.env.DB_HOST}${process.env.DB_NAME}`,
    synchronize: true,
    logging: true,
    entities: [User],
});