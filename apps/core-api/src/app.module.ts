import supabaseConfig from '@/config/supabase.config'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import databaseConfig, { DatabaseConfig } from './config/database.config'
import enviromentConfig, { EnviromentConfigType } from './config/enviroment.config'
import { AuthModule } from './modules/auth/auth.module'
import { ContaBancariaModule } from './modules/conta-bancaria/conta-bancaria.module'
import { TransacaoModule } from './modules/transacao/transacao.module'
import { UsuarioModule } from './modules/usuario/usuario.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [databaseConfig, enviromentConfig, supabaseConfig],
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                url: configService.get<DatabaseConfig>('database').url,
                entities: [`${__dirname}/**/*.entity{.ts,.js}`],
                logging: configService.get<EnviromentConfigType>('enviroment').nodenv === 'dev',
                migrations: [`${__dirname}/migrations/*{.ts,.js}`],
                synchronize: true,
                entityPrefix: 'allfreedo',
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        UsuarioModule,
        ContaBancariaModule,
        TransacaoModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
