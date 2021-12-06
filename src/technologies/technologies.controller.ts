import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { Technology } from './entities/technology.entity';
import { TechnologiesService } from './technologies.service';

@Controller('technologies')
export class TechnologiesController {
  constructor(private technologiesService: TechnologiesService) {}

  @Get()
  async getAll(): Promise<Technology[] | undefined> {
    return this.technologiesService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Technology | undefined> {
    return this.technologiesService.getById(id)
  }

  @Post()
  create(@Body() createTechnologyDto: CreateTechnologyDto) {
    return this.technologiesService.create(createTechnologyDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Technology | undefined> {
    return this.technologiesService.remove(id)
  }

  @Put(':id')
  update(@Body() updateTechnologyDto: UpdateTechnologyDto, @Param('id') id: string): Promise<Technology | undefined> {
    return this.technologiesService.update(id, updateTechnologyDto)
  }
}
