import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AuthModule } from "./auth/auth.module"
import { RouterModule } from "@nestjs/core"
import { AuthController } from "./auth/auth.controller"
import { GroceryModule } from "./grocery/grocery.module"
import { PrismaModule } from "./prisma/prisma.module"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    RouterModule.register([
      {
        path: "users",
        module: AuthModule,
      },
    ]),
    GroceryModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
