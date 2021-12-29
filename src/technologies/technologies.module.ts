import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnologiesController } from './technologies.controller';
import { TechnologiesService } from './technologies.service';
import { Technology } from './entities/technology.entity';

@Module({
  controllers: [TechnologiesController],
  providers: [TechnologiesService],
  imports: [TypeOrmModule.forFeature([Technology])],
})
export class TechnologiesModule {}
