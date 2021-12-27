import { Module } from '@nestjs/common';
import { TechsService } from './techs.service';
import { TechsResolver } from './techs.resolver';
import { Tech } from './tech.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tech]), UsersModule],
  providers: [TechsService, TechsResolver],
})
export class TechsModule {}
