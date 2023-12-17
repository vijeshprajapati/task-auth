import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class RefreshDto{

    @ApiProperty()
    @IsString()
    @Length(5, 10)
    username: string;

    @ApiProperty()
    @IsString()
    @Length(6, 12)
    password: string;

    @ApiProperty()
    @IsString()
    refresh: string;

}