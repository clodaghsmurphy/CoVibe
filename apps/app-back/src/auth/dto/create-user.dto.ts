import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  password: string

  @IsString()
  @MinLength(2)
  @IsNotEmpty()
  name: string
}
