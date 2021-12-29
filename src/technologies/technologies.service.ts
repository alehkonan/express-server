import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { CreateTechnologyDto } from './dto/create-technology.dto';
import { UpdateTechnologyDto } from './dto/update-technology.dto';
import { Technology } from './entities/technology.entity';

@Injectable()
export class TechnologiesService {
  constructor(private connection: Connection) {}

  async getAll(): Promise<Technology[] | undefined> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const result = await queryRunner.manager.find(Technology);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error instanceof Error) console.log(error.message);
    } finally {
      await queryRunner.release();
    }
  }

  async getById(id: string): Promise<Technology | undefined> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const result = await queryRunner.manager.findOneOrFail(Technology, id);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error instanceof Error) console.log(error.message);
    } finally {
      await queryRunner.release();
    }
  }

  async create(
    technology: CreateTechnologyDto
  ): Promise<Technology | undefined> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newTechnology = queryRunner.manager.create(Technology, technology);
      const result = await queryRunner.manager.save(newTechnology);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error instanceof Error) console.log(error.message);
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: string): Promise<Technology | undefined> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const result = await queryRunner.manager.findOneOrFail(Technology, id);
      await queryRunner.manager.delete(Technology, id);
      await queryRunner.commitTransaction();
      return result;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error instanceof Error) console.log(error.message);
    } finally {
      await queryRunner.release();
    }
  }

  async update(
    id: string,
    technology: UpdateTechnologyDto
  ): Promise<Technology | undefined> {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const result = await queryRunner.manager.findOneOrFail(Technology, id);
      await queryRunner.manager.update(Technology, id, technology);
      await queryRunner.commitTransaction();
      return { ...result, ...technology };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      if (error instanceof Error) console.log(error.message);
    } finally {
      await queryRunner.release();
    }
  }
}
