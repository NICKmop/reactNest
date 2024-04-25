import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { userList } from "./dto/user.entity";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserRepository } from "./user.repository";
import { JwtStrategy } from "./jwt.strategy";
import * as config from 'config';

const jwtConfig = config.get('jwt');

@Module({
    imports: [
        TypeOrmModule.forFeature([userList]),
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: jwtConfig['secret'],
            signOptions: {
                expiresIn: 3600
            }
        }),
    ],
    controllers: [AuthController],
    providers: [ AuthService, UserRepository, JwtStrategy],
    exports: [JwtStrategy, PassportModule]
})

export class AuthModule {}