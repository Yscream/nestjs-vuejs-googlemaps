import { Body, Controller, Post } from '@nestjs/common';
import { GoogleMapsService } from './google-maps.service';
import { CreateMarkerDto } from './dto/create-marker.dto';

@Controller('google-maps')
export class GoogleMapsController {
  constructor(private userService: GoogleMapsService) {}

  @Post('/marker')
  create(@Body() markerDto: CreateMarkerDto) {
    return this.userService.CreateMarker(markerDto);
  }
}
