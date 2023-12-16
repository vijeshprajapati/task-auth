import { ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

export class RefreshJwtAuthGuard extends AuthGuard('jwt-refresh'){

    canActivate(context: ExecutionContext) {
        return super.canActivate(context);
    }

    handleRequest(err: any, user: any, info: any){
        if(err || !user){
            throw err || new UnauthorizedException();
        }
        return user;
    }

}