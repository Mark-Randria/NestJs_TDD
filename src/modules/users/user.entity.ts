import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './interfaces/user.interface';

@Entity({ name: 'User' })
export class UserEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstname: string;

  @Column({ length: 50 })
  lastname: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column('boolean')
  isAdmin: boolean;
}
