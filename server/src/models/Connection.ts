import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('connections')
class Connection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  user_id: string;

  @Column(CreateDateColumn)
  created_at: Date;

  @Column(UpdateDateColumn)
  updated_at: Date;
}

export default Connection;
