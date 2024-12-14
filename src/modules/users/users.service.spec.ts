import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { IUser } from './interfaces/user.interface';

const mockUserRepository = () => ({
  findOneBy: jest.fn(),
  find: jest.fn(),
  create: jest.fn(),
  save: jest.fn(),
});

const oneUser = {
  id: 1,
  firstname: 'test',
  lastname: 'test',
  email: 'test@example.com',
  isAdmin: false,
} as UserEntity;

const otherUser = {
  id: 2,
  firstname: 'test',
  lastname: 'test',
  email: 'test@example.com',
  isAdmin: true,
} as UserEntity;

const listUser: IUser[] = [oneUser, otherUser];

describe('UsersService', () => {
  let service: UsersService;
  let userRepository: Partial<Repository<UserEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(UserEntity),
          useFactory: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  it('should find a user by ID', async () => {
    (userRepository.findOneBy as jest.Mock).mockResolvedValue(oneUser);

    const result = await service.findUserById(1);

    expect(userRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
    expect(result).toEqual(oneUser);
  });

  it('should find a list of all user', async () => {
    (userRepository.find as jest.Mock).mockResolvedValue(listUser);

    const result = await service.findAll();

    expect(userRepository.find).toHaveBeenCalled();
    expect(result).toEqual(listUser);
  });

  it('should return the saved user', async () => {
    const userDTO = {
      firstname: 'test',
      lastname: 'test',
      email: 'test@example.com',
      password: 'secret',
    };
    const savedUser = { id: 1, isAdmin: false, ...userDTO } as UserEntity;

    (userRepository.create as jest.Mock).mockReturnValue(savedUser);
    (userRepository.save as jest.Mock).mockReturnValue(savedUser);

    const result = await service.createUser(userDTO);

    expect(userRepository.create).toHaveBeenCalledWith(userDTO);
    expect(userRepository.save).toHaveBeenCalledWith(savedUser);

    expect(result).toEqual(savedUser);
  });
});
