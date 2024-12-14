import { Injectable, Inject } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  // 1st useCase: usage of typeORMConnection without database providers
  // constructor(
  //   @InjectRepository(UserEntity)
  //   private readonly userRepository: Repository<UserEntity>,
  // ) {}

  // 2nd useCase: usage of userProviders with database providers
  // constructor(
  //   @Inject('USER_REPOSITORY')
  //   private readonly userRepository: Repository<UserEntity>,
  // ) {}

  // 3rd useCase: usage of different datasource injection using providers
  private userRepository: Repository<UserEntity>;
  constructor(@Inject('TYPEORM_DATA_SOURCE') private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(UserEntity);
  }
}
