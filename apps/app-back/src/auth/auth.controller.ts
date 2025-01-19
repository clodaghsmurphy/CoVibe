import { Body, Controller, Get, Post } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "~/auth/dto/create-user.dto"
import { LoginDto } from "~/auth/dto/login.dto"

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get()
  getUsers() {
    return { message: "List of users test" }
  }

  @Post("register")
  register(@Body() createUserDto: CreateUserDto) {
    return this.service.createUser(createUserDto)
  }

  @Post("login")
  login(@Body() loginDto: LoginDto) {
    return this.service.login(loginDto)
  }
}
