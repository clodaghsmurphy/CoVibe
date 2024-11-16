import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service.ts";

@Controller()
@ApiTags("Auth")
export class AuthController {
    constructor(private readonly service: AuthService) {
    }

    @Get()
    getUsers() {
        return {message: 'List of users test'};

    }
}