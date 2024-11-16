import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config"
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { AuthModule } from './auth/auth.module.ts';
import { RouterModule  } from "@nestjs/core"
import {AuthController} from "./auth/auth.controller.ts";

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
        }
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
