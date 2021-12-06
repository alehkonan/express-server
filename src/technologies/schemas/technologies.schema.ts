import { Entity, EntitySchema } from 'typeorm';
import { Technology } from '../entities/technology.entity';

export const TechnologySchema = new EntitySchema<Technology>({
  name: 'Technology',
  target: Technology,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    }
  }
})
