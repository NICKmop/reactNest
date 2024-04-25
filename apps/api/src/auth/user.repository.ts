import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { userList } from "./dto/user.entity";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import * as bcrypt from 'bcryptjs';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class UserRepository extends Repository<userList> {
    constructor( dataSource: DataSource ){
        super(userList, dataSource.createEntityManager());
    };

    /**
     * USER CREATE
     * @param authCredentialsDto id/pw 
     */
    async createUser(authCredentialsDto :AuthCredentialsDto) : Promise<void> {
        const {username, password} = authCredentialsDto;
        
        console.log(authCredentialsDto);

        const salt = await bcrypt.genSalt();
        
        // password hash value gen
        const hashPassword = await bcrypt.hash(password, salt);

        const user = this.create({username, password: hashPassword});

        try {
            await this.save(user);
        } catch (err) {
            if(err.code === '23505'){
                throw new ConflictException(`already exist user : ${user.username}`);
            }else{
                throw new InternalServerErrorException('................server connection error');
            }
        }
    }

    async loginuser(authCredentialsDto : AuthCredentialsDto, jwt: JwtService): Promise<{accessToken: string}>{
        const {username, password} = authCredentialsDto;

        const user = await this.findOne({where: {username: username}});

        if(user && (await bcrypt.compare(password, user.password))){
            // userToken gen
            const payload = { username };
            const accessToken = jwt.sign(payload);

            return {accessToken};
        }else{
            throw new UnauthorizedException('login fail.........')
        }
    }
}