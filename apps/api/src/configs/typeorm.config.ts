import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { userList } from "src/auth/dto/user.entity";
import * as config from 'config';

/**
 * DB CONFIG DEFAULT ROOT::
 */

const dbConfig = config.get('db');

export const typeORMConfig : TypeOrmModuleOptions = {
    type: dbConfig['type'],
    host: dbConfig['host'],
    port: dbConfig['port'],
    username: dbConfig['username'],
    password : dbConfig['password'],
    database: dbConfig['database'],
    entities: [
        userList
    ],
    synchronize: dbConfig['synchronize']
}