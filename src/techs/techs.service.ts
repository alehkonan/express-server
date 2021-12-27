import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { CreateTechInput } from './dto/create-tech.input';
import { Tech } from './tech.entity';

@Injectable()
export class TechsService {
  constructor(
    @InjectRepository(Tech)
    private techsRepository: Repository<Tech>,
    private usersService: UsersService
  ) {}

  async createTech(createTechInput: CreateTechInput): Promise<Tech> {
    const newTech = this.techsRepository.create(createTechInput);
    return this.techsRepository.save(newTech);
  }

  async findAll(): Promise<Tech[]> {
    return this.techsRepository.find();
  }

  async findOne(id: number): Promise<Tech> {
    return this.techsRepository.findOneOrFail(id);
  }

  getUser(userId: number): Promise<User> {
    return this.usersService.findOne(userId);
  }
}
