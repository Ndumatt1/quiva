import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTable } from '../../../base/base.entity';
import { Episode } from '../../episode/entities/episode.entity';

@Entity({ name: 'comment' })
export class Comment extends BaseTable {
  @Column({ type: 'varchar', nullable: false, length: 250 })
  comment: string;

  @Column({ type: 'varchar', nullable: false })
  ip_address_location: string;

  @ManyToOne(() => Episode, (episode) => episode.episode_comments)
  episode: Episode;
}