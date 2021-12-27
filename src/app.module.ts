import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnologiesModule } from './technologies/technologies.module';
import { Technology } from './technologies/entities/technology.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { TechsModule } from './techs/techs.module';
import { join } from 'path';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['**/*.entity{.ts,.js}'],
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TechnologiesModule,
    TechsModule,
    UsersModule,
  ],
})
export class AppModule {}
