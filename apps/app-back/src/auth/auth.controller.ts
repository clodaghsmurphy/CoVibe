import { Body, Controller, Get, Post, Req, UnauthorizedException } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "~/auth/dto/create-user.dto"
import { LoginDto } from "~/auth/dto/login.dto"
import { Request } from "express"

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

  @Post("verify-token")
  @ApiResponse({
    status: 200,
    description: "Token is valid",
  })
  verifyToken(@Req() req: Request) {
    const refreshToken = req.cookies["refresh_token"]
    if (!refreshToken) {
      throw new UnauthorizedException("Invalid token")
    }
    return this.service.verifyToken(refreshToken)
  }
}
