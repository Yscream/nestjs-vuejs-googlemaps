import { Module } from '@nestjs/common';
import { GoogleMapsController } from './google-maps.controller';
import { GoogleMapsService } from './google-maps.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Marker } from './google-maps.model';

@Module({
  controllers: [GoogleMapsController],
  providers: [GoogleMapsService],
  imports: [SequelizeModule.forFeature([Marker])],
})
export class GoogleMapsModule {}
