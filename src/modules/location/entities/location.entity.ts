import { Column, Entity, OneToMany } from 'typeorm';
import { BaseTable } from '../../../base/base.entity';
import { Character } from '../../character/entities/character.entity';

@Entity({ name: 'location' })
export class Location extends BaseTable {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'float', nullable: false })
  latitude: number;

  @Column({ type: 'float', nullable: false })
  longitude: number;

  @OneToMany(() => Character, (character) => character.location)
  characters: Character[];
}