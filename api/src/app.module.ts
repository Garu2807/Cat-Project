import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CatsModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configServise: ConfigService) => ({
        type: 'postgres',
        host: configServise.get('DB_HOST'),
        port: configServise.get('DB_PORT'),
        username: configServise.get('DB_USERNAME'),
        password: configServise.get('DB_PASSWORD'),
        database: configServise.get('DB_NAME'),
        synchronize: true,
        entities: [__dirname + '/**/*.entity{.js,ts}'],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
