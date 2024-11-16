import { Module } from '@nestjs/common';
import {AuthController} from "./auth.controller.ts";
import {AuthService} from "./auth.service.ts";

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule {}
