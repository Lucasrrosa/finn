import { Usuario } from '@/modules/auth/decorators/Usuario.decorator'
import { CreateTransacaoDto } from '@/modules/transacao/dto/CreateTransacao.dto'
import { FiltroTransacaoDto } from '@/modules/transacao/dto/FiltroTransacaoDto'
import { CreateTransacaoUsecase } from '@/modules/transacao/usecases/CreateTransacao.usecase'
import { FindOneTransacaoUsecase } from '@/modules/transacao/usecases/FindOneTransacao.usecase'
import { FindTransacaoByFilterUsecase } from '@/modules/transacao/usecases/FindTransacaoByFilter.usecase'
import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post, Query } from '@nestjs/common'

@Controller('transacao')
export class TransacaoController {
    
    @Inject()
    private readonly createTransacaoUsecase: CreateTransacaoUsecase

    @Inject()
    private readonly findOneTransacaoUsecase: FindOneTransacaoUsecase

    @Inject()
    private readonly findTransacaoByFiltro: FindTransacaoByFilterUsecase

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: CreateTransacaoDto, @Usuario() usuarioId: string){
        await this.createTransacaoUsecase.execute(body, usuarioId)
    }

    @Get()
    async getByFiltro(@Query() params: FiltroTransacaoDto, @Usuario() usuarioId: string) {
        return await this.findTransacaoByFiltro.execute(params, usuarioId)
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Usuario() usuarioId: string) {
        return await this.findOneTransacaoUsecase.execute(id)
    }
}
