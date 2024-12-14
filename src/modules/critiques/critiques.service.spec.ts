import { Test, TestingModule } from '@nestjs/testing';
import { CritiquesService } from './critiques.service';

describe('CritiquesService', () => {
  let service: CritiquesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CritiquesService],
    }).compile();

    service = module.get<CritiquesService>(CritiquesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
