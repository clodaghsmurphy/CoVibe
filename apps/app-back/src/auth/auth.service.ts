import { Injectable, UnauthorizedException } from "@nestjs/common"
import { CreateUserDto } from "./dto/create-user.dto"
import { PrismaService } from "../prisma/prisma.service"
import { LoginDto } from "./dto/login.dto"
import * as crypto from "crypto"

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: createUserDto.password,
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

    if (!user || user.password !== loginDto.password) {
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
      user: result,
      refresh_token: refreshToken.token,
    }
  }
}
