import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from "src/prisma.service";

@Injectable()
export class RefreshJwtStrategy extends PassportStrategy(Strategy, 'jwt-refresh'){

    constructor(private readonly prismaService: PrismaService) {
        super({
            jwtFromRequest: ExtractJwt.fromBodyField('refresh'),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    async validate(payload: { username: string }) {
        const users = await this.prismaService.users.findUnique({
          where: {
            username: payload.username,
          },
        });
    
        return users;
      }
}