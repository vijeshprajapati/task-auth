import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class RegisterUsersDto{

    @ApiProperty()
    @IsString()
    @Length(5, 15)
    username: string;

    @ApiProperty()
    @IsString()
    @Length(6, 15)
    password: string;

    @ApiProperty()
    @IsString()
    @Length(5, 15)
    name: string;

    @ApiProperty()
    @IsString()
    @Length(5, 20)
    email: string;
}