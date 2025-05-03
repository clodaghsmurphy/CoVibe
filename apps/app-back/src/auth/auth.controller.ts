import { Body, Controller, Get, Post, Req, Res, UnauthorizedException } from "@nestjs/common"
import { ApiResponse, ApiTags } from "@nestjs/swagger"
import { AuthService } from "./auth.service"
import { CreateUserDto } from "~/auth/dto/create-user.dto"
import { LoginDto } from "~/auth/dto/login.dto"
import { Request, Response } from "express"

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
  async login(@Body() loginDto: LoginDto, @Res() res: Response) {
    const { refresh_token, user } = await this.service.login(loginDto)
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    })
    return res.status(200).json(user)
  }

  @Get("verify-token")
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
