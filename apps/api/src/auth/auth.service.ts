import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { JwtService } from "@nestjs/jwt";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository : UserRepository,
        private jwtService : JwtService
    ){}

    async signUp(authCredentialsDto:AuthCredentialsDto): Promise<void> {
        this.userRepository.createUser(authCredentialsDto);
    }

    async signIn(authCredentialsDto:AuthCredentialsDto): Promise<{accessToken : string}>{
        return this.userRepository.loginuser(authCredentialsDto, this.jwtService);
    }
}