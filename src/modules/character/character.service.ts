import { Character } from "./entities/character.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Episode } from "../episode/entities/episode.entity";
import { CreateCharacterDto } from "./dto/create-character.dto";
import { Location } from "../location/entities/location.entity";
import { ErrorHelper } from "src/utils/error-helper";
import { ListCharacterDto } from "./dto/list-character.dto";

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(Character)
    private characterRepo: Repository<Character>,
    @InjectRepository(Episode)
    private episodeRepo: Repository<Episode>,
    @InjectRepository(Location)
    private locationRepo: Repository<Location>
  ) { }


  async listCharacter(
    dto: ListCharacterDto,
  ): Promise<Character[]> {
    const { sort = 'first_name', order = 'ASC', gender, location, filterStatus } = dto;

    const query = this.characterRepo.createQueryBuilder('character');

    if (gender) {
      query.andWhere('character.gender = :gender', { gender: gender });
    }

    if (location) {
      query.andWhere('character.location = :location', { location: location });
    }

    if (filterStatus) {
      query.andWhere('character.status = :status', { status: filterStatus });
    }

    return query
      .orderBy(`character.${sort}`, order)
      .getMany();
  }

  async searchEpisodeForCharacter(name: string) {
    const query = this.characterRepo.createQueryBuilder('character')
      .leftJoinAndSelect('character.episodes', 'episode')
      .where('character.first_name ILIKE :name OR character.last_name ILIKE :name', { name: `%${name}%` });

    const characters = await query.getMany();

    const episodes = characters.flatMap(character => character.episodes);

    return episodes;
  }

  async createCharacter(data: CreateCharacterDto) {
    const { locationId, episode, ...characterData } = data;

    let location = null;
    let episodes: Episode[] = [];

    if (locationId) {
      location = await this.locationRepo.findOne({ where: { id: locationId } });
      if (!location) {
        throw new ErrorHelper.NotFoundException('Location not found');
      }
    }

    if (episode && episode.length) {
      episodes = await this.episodeRepo.find({
        where: { id: In(episode) },
      });
    }

    const character = this.characterRepo.create({
      ...characterData,
      ...(location && { location }),
      ...(episodes.length && { episodes }),
    });

    return this.characterRepo.save(character);
  }
}