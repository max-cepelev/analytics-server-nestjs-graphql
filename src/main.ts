import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { json } from 'body-parser';
import { PrismaService } from 'prisma/prisma.service';
import { graphqlUploadExpress } from 'graphql-upload-minimal';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.enableCors({
    origin: ['http://localhost:3001'],
    credentials: true,
  });
  app.use(cookieParser());
  app.use(json({ limit: '50mb' })); //For JSON requests
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));
  await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
}
bootstrap();
