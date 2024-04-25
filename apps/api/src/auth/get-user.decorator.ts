import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { userList } from "./dto/user.entity";

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) : userList =>{
    const req = ctx.switchToHttp().getRequest();
    
    return req.user;
})