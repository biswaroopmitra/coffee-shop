import { Module } from '@nestjs/common';
import { SandwichController } from './sandwich.controller';
import { SandwichService } from './sandwich.service';

@Module({
  controllers: [SandwichController],
  providers: [SandwichService]
})
export class SandwichModule {}
