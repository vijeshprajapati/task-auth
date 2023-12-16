import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import {Request,Response} from 'express'
import { JwtAuthGuard } from "src/auth/auth.guard";
import { Roles } from "./roles/roles.decorator";
import { Role } from "./roles/role.enum";
import { RoleGuard } from "./roles/role.guard";


@Controller('users')
export class UsersController {
    constructor(private readonly userService : UsersService){}

    @Get()
    @UseGuards(JwtAuthGuard, RoleGuard)
    @Roles(Role.Admin)
    async getAllUsers(@Req() request: Request, @Res() response: Response):Promise<any>{
          try{
               const result = await this.userService.getAllUser();
               return response.status(200).json({
                    status: 'Ok!',
                    message: 'Successfully fetch data!',
                    result: result
               })
          }catch(err){
               return response.status(500).json({
                    status: 'Ok!',
                    message : 'Internal Server Error!'
               })
          }
    }

    @Get('/comments')
    @UseGuards(JwtAuthGuard)
    async getComments(): Promise<string>{
          return ("You are at /users/comments route");
}
}