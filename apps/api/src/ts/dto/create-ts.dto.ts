import { IsEmpty, IsNotEmpty } from "class-validator";

export class CreateTsDto{
    @IsEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}