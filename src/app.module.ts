import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnologiesModule } from './technologies/technologies.module';
import { Technology } from './technologies/entities/technology.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Technology],
      ssl: {
        rejectUnauthorized: false,
      }
    }),
    TechnologiesModule,
  ],
})
export class AppModule {}
