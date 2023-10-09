import { Module } from '@nestjs/common';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import * as process from 'process';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Marker } from './google-maps/google-maps.model';

@Module({
  imports: [
    GoogleMapsModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Marker],
      autoLoadModels: true,
    }),
  ],
})
export class AppModule {}
