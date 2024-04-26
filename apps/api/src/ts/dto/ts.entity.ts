import { userList } from "src/auth/dto/user.entity";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ts extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: string;

    // @ManyToOne(type => userList, userlist => userlist.tss)
    // user: userList;
}