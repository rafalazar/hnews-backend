import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './posts/post.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: [`.env.${process.env.NODE_ENV}`]
  }),
  PostModule, 
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => ({
      uri: `${configService.get('DB_URL')}:${configService.get('DB_PORT')}/${configService.get('DB_NAME')}`
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
