import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
import { DataSource, DataSourceOptions } from 'typeorm'

config()

const configService = new ConfigService()

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PORT'),
    database: configService.get('DATABASE_NAME'),
    port: configService.get('DATABASE_PASS'),
    entities: [`${__dirname}/../../**/*.entity{.ts,.js}`],
    logging: configService.get('NODENV') === 'dev',
    migrations: [`${__dirname}/migrations/*{.ts,.js}`],
    synchronize: false,
    entityPrefix: 'allfreedo',
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource
