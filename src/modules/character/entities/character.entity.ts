import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTable } from '../../../base/base.entity';
import { Episode } from 'src/modules/episode/entities/episode.entity';
import { Location } from '../../location/entities/location.entity'


type status = 'ALIVE' | 'DEAD' | 'UNKNOWN'

@Entity({ name: 'character' })
export class Character extends BaseTable {
  @Column({ type: 'varchar', nullable: false })
  first_name: string;

  @Column({ type: 'varchar', nullable: false })
  last_name: string;

  @Column({ type: 'varchar', nullable: false })
  status: string;

  @Column({ type: 'varchar', nullable: true })
  state_of_origin: string;

  @Column({ type: 'varchar', nullable: false })
  gender: string;

  @ManyToMany(() => Episode, (episode) => episode.characters)
  @JoinTable()
  episodes: Episode[]

  @ManyToOne(() => Location, (location) => location.characters, { eager: true })
  location: Location;
}