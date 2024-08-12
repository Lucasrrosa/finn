import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import databaseConfig, { DatabaseConfig } from './config/database.config'
import enviromentConfig, { EnviromentConfigType } from './config/enviroment.config'

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [databaseConfig, enviromentConfig],
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<DatabaseConfig>('database').host,
                username: configService.get<DatabaseConfig>('database').user,
                password: configService.get<DatabaseConfig>('database').pass,
                database: configService.get<DatabaseConfig>('database').name,
                port: configService.get<DatabaseConfig>('database').port,
                entities: [`${__dirname}/**/*.entity{.ts,.js}`],
                logging: configService.get<EnviromentConfigType>('enviroment').nodenv === 'dev',
                migrations: [`${__dirname}/migrations/*{.ts,.js}`],
                synchronize: false,
                entityPrefix: 'allfreedo',
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
