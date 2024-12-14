import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { IUser } from './interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  // 1st useCase: usage of typeORMConnection without database providers
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  // 2nd useCase: usage of userProviders with database providers
  // constructor(
  //   @Inject('USER_REPOSITORY')
  //   private readonly userRepository: Repository<UserEntity>,
  // ) {}

  // 3rd useCase: usage of different datasource injection using providers
  // private userRepository: Repository<UserEntity>;
  // constructor(@Inject('TYPEORM_DATA_SOURCE') private dataSource: DataSource) {
  //   this.userRepository = this.dataSource.getRepository(UserEntity);
  // }

  async findUserById(id: number): Promise<IUser> {
    return await this.userRepository.findOneBy({ id });
  }
}
