import { Ts } from "src/ts/dto/ts.entity";
import { 
    BaseEntity,
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique 
} from "typeorm";

@Entity()
@Unique(['username'])
export class userList extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;
    
    // QUERY VALUE - ts
    // @OneToMany( type => Ts, ts => ts.user, {eager: true})
    // tss: Ts[];
}