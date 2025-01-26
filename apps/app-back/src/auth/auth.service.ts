import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { PrismaService } from "../prisma/prisma.service"
import { LoginDto } from "./dto/login.dto"
import * as crypto from "crypto"
import * as bcrypt from "bcrypt"
import { ApiResponse } from "@nestjs/swagger"
import { User } from "@covibe/db"
import { UserResponseDto } from "~/auth/dto/user.response.dto"
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    })

    if (existingUser) {
      throw new BadRequestException("User with this email already exists")
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        name: createUserDto.name,
      },
    })

    const { password: _, ...result } = user
    return result
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: loginDto.email,
      },
    })

    if (!user) {
      throw new NotFoundException("User not found")
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid credentials")
    }

    const { password: _, ...result } = user

    const refreshToken = await this.prisma.refreshToken.create({
      data: {
        userId: user.id,
        token: crypto.randomUUID(),
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
      },
    })

    return {
      cookie: {
        name: "refresh_token",
        value: refreshToken.token,
        options: {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          expires: refreshToken.expiresAt,
        },
      },
      user: result,
    }
  }

  /**
   * Verify if the token is valid
   * @param token
   * @returns
   */
  @ApiResponse({
    status: 200,
    description: "Token is valid",
    type: UserResponseDto,
  })
  async verifyToken(token: string) {
    const refreshToken = await this.prisma.refreshToken.findUnique({
      where: {
        token,
      },
    })

    if (!refreshToken) {
      throw new UnauthorizedException("Invalid token")
    }

    if (refreshToken.expiresAt < new Date()) {
      throw new UnauthorizedException("Token has expired")
    }

    return refreshToken
  }
}
