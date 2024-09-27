import { ContaBancariaModule } from '@/modules/conta-bancaria/conta-bancaria.module'
import { CategoriaTransacaoController } from '@/modules/transacao/controllers/categoria-transacao.controller'
import { CategoriaTransacaoEntity } from '@/modules/transacao/entities/categoria-transacao.entity'
import { TransacaoEntity } from '@/modules/transacao/entities/transacao.entity'
import { CategoriaTransacaoRepository } from '@/modules/transacao/repositories/categoria-transacao.repository'
import { TransacaoRepository } from '@/modules/transacao/repositories/transacao.repository'
import { CreateTransacaoUsecase } from '@/modules/transacao/usecases/CreateTransacao.usecase'
import { FindOneTransacaoUsecase } from '@/modules/transacao/usecases/FindOneTransacao.usecase'
import { FindTransacaoByFilterUsecase } from '@/modules/transacao/usecases/FindTransacaoByFilter.usecase'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TransacaoController } from './controllers/transacao.controller'

@Module({
    imports: [
        TypeOrmModule.forFeature([TransacaoEntity, CategoriaTransacaoEntity]),
        ContaBancariaModule
    ],
    controllers: [TransacaoController, CategoriaTransacaoController],
    providers: [
        TransacaoRepository,
        CategoriaTransacaoRepository,
        CreateTransacaoUsecase,
        FindOneTransacaoUsecase,
        FindTransacaoByFilterUsecase,
    ]
})
export class TransacaoModule {}
