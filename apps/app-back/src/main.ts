import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { AppModule } from "./app.module"
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests from specific origins
      const allowedOrigins = ["http://192.168.0.170:5137", "http://localhost:5137"]
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS"))
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
  app.useGlobalPipes(new ValidationPipe())
  const PORT = process.env.PORT || 8080
  const openApiConfig = new DocumentBuilder()
    .setTitle("CoVibe")
    .setDescription("The Deno 2 - NestJS -- Example API documentation")
    .setVersion("1.0")
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, openApiConfig)
  SwaggerModule.setup("api", app, document)

  await app.listen(PORT, "::")
  console.log(`Application is running on: http://localhost:${PORT}`)
}
bootstrap()

export { bootstrap }
