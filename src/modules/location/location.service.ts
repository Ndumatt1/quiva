import { Injectable } from '@nestjs/common';
import { Location } from './entities/location.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepo: Repository<Location>
  ) { }
  async createLocation(data: CreateLocationDto): Promise<Location> {
    const latitude = Number(data.latitude);
    const longitude = Number(data.longitude);

    const location = this.locationRepo.create({
      name: data.name,
      latitude,
      longitude,
    });
    return await this.locationRepo.save(location);
  }

  async getLocations(): Promise<Location[]> {
    return await this.locationRepo.find();
  }
}