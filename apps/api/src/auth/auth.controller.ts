import { Body, Controller, Injectable, Post, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ){}

    @Post('/signUp')
    signUp( @Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto ) : Promise<void>{
        return this.authService.signUp(authCredentialsDto);
    };

    @Post('/signIn')
    signIn( @Body(ValidationPipe) authCredentialsDto:AuthCredentialsDto) : Promise<{accessToken: string}>{
        return this.authService.signIn(authCredentialsDto).then(token => {
            console.log(token);
            
            return token;
        });
    }
}
