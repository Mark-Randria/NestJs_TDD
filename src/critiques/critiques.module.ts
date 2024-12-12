import { Module } from '@nestjs/common';
import { CritiquesController } from './critiques.controller';
import { CritiquesService } from './critiques.service';

@Module({
  controllers: [CritiquesController],
  providers: [CritiquesService],
})
export class CritiquesModule {}
