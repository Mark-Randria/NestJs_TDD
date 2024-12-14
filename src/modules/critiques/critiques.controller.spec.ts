import { Test, TestingModule } from '@nestjs/testing';
import { CritiquesController } from './critiques.controller';

describe('CritiquesController', () => {
  let controller: CritiquesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CritiquesController],
    }).compile();

    controller = module.get<CritiquesController>(CritiquesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
