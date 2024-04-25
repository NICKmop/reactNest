import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt'
import { UserRepository } from "./user.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { userList } from "./dto/user.entity";
import * as config from 'config';

const jwtConfig = config.get('jwt');

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt"){
    private logger = new Logger(JwtStrategy.name);
    

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //Request Header에서 Bearer auth 뽑아내기
            secretOrKey: jwtConfig['secret'],
        });
    }

    async validate(payload: { username: any; }) {
        const { username } = payload;
        const user : userList = await this.userRepository.findOne(
            {where: {username: username}
        });
        
        console.log(user);

        if(!user) {
            this.logger.error(`User "${username}" not found`);
            throw new UnauthorizedException();
        }

        return user;
        
    }
}