import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { LocationService } from './location.service';
import { HttpResponse } from 'src/utils/http-response.utils';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) { }

  @Post()
  async createLocation(@Body() data: CreateLocationDto) {
    const res = await this.locationService.createLocation(data);
    return HttpResponse.success({ data: res, message: 'Location created successfully' });
  }

  @Get()
  async getLocations() {
    const res = await this.locationService.getLocations();
    return HttpResponse.success({ data: res, message: 'Locations fetched successfully' });
  }
}