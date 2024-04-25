import { Injectable, NotFoundException } from "@nestjs/common";
import { DataSource, EntityMetadataNotFoundError, Repository } from "typeorm";
import { Ts } from "./dto/ts.entity";
import { NotFoundError } from "rxjs";
import { GetUser } from "src/auth/get-user.decorator";
import { userList } from "src/auth/dto/user.entity";
import { CreateTsDto } from "./dto/create-ts.dto";

@Injectable()
export class TsRepository extends Repository<Ts> {
    constructor(dataSource: DataSource){
        super(Ts, dataSource.createEntityManager());
    }

    async getTsId(tsId : number) : Promise<Ts> {
        const found =await this.findOne({where: {id: tsId}});

        if(!found) throw new EntityMetadataNotFoundError(`MISSING META : ${tsId}`);
        if(!found) throw new NotFoundException(` not found this number : ${tsId} `)

        return found;
    }

    async getAllTs() : Promise<Ts[]>{
        // const query = this.createQueryBuilder('board');
        // query.where('board.userId = :userId', {userId: user.id});
        // const boards = await query.getMany();

        return this.find({});
    }

    async createTs(createTsDto : CreateTsDto, user: userList) : Promise<Ts>{
        const { title, description } = createTsDto;
        
        const createTs = this.create({
            title, description, status:'PUBLIC', user
        });
        
        await this.save(createTs);

        return createTs;
    }

    async deleteTs(tsId : number, user: userList): Promise<void>{
        this.delete({id: tsId, user});
    }

    async updateTsStatus(tsId : number, user: userList) : Promise<Ts>{
        let ts = await this.getTsId(tsId);
        ts.status = 'GREATE';

        this.save(ts);

        return ts;
    }
}