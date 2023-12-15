import { IsString, Length } from "class-validator";

export class RegisterUsersDto{

    @IsString()
    @Length(5, 15)
    username: string;

    @IsString()
    @Length(6, 15)
    password: string;

    @IsString()
    @Length(5, 15)
    name: string;

    @IsString()
    @Length(5, 20)
    email: string;
}