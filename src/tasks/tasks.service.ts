import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private tasksRepository: Repository<Task>
  ) {}

  create(createTaskInput: CreateTaskInput) {
    const newTask = this.tasksRepository.create(createTaskInput);
    return this.tasksRepository.save(newTask);
  }

  findAll() {
    return this.tasksRepository.find();
  }

  findOne(id: number) {
    return this.tasksRepository.findOneOrFail(id);
  }

  async update(id: number, updateTaskInput: UpdateTaskInput) {
    const task = await this.tasksRepository.findOneOrFail(id);
    const merge = this.tasksRepository.merge(task, updateTaskInput);
    return this.tasksRepository.save(merge);
  }

  async remove(id: number) {
    const taskToRemove = await this.tasksRepository.findOneOrFail(id);
    this.tasksRepository.delete(id);
    return taskToRemove;
  }
}
