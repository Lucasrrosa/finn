import { ContaBancariaRepository } from '@/modules/conta-bancaria/conta-bancaria.repository'
import { ContaBancariaService } from '@/modules/conta-bancaria/conta-bancaria.service'
import { ContaBancariaEntity } from '@/modules/conta-bancaria/entities/conta-bancaria.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ContaBancariaController } from './conta-bancaria.controller'

@Module({
    imports: [TypeOrmModule.forFeature([ContaBancariaEntity])],
    providers: [ContaBancariaRepository, ContaBancariaService],
    controllers: [ContaBancariaController],
})
export class ContaBancariaModule {}