import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseTable } from '../../../base/base.entity';
import { Character } from '../../character/entities/character.entity';
import { Comment } from '../../comment/entities/comment.entity';

@Entity({ name: 'episode' })
export class Episode extends BaseTable {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'timestamp', nullable: false })
  release_date: Date;

  @Column({ type: 'varchar', nullable: false })
  episode_code: string;

  @ManyToMany(() => Character, (character) => character.episodes)
  characters: Character[];

  @OneToMany(() => Comment, (comment) => comment.episode)
  episode_comments: Comment[];

}