import { Injectable } from '@nestjs/common';
import { Marker } from './google-maps.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMarkerDto } from './dto/create-marker.dto';

@Injectable()
export class GoogleMapsService {
  constructor(
    @InjectModel(Marker) private googleMapsRepository: typeof Marker,
  ) {}

  async CreateMarker(dto: CreateMarkerDto): Promise<Marker> {
    return await this.googleMapsRepository.create(dto);
  }
}
