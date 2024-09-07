import { TransacaoEntity } from '@/modules/transacao/entities/transacao.entity'
import { TransacaoRepository } from '@/modules/transacao/transacao.repository'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TransacaoController } from './transacao.controller'
import { TransacaoService } from './transacao.service'

@Module({
    imports: [TypeOrmModule.forFeature([TransacaoEntity])],
    controllers: [TransacaoController],
    providers: [TransacaoRepository, TransacaoService]
})
export class TransacaoModule {}
