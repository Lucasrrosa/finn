import { Usuario } from '@/modules/auth/decorators/Usuario.decorator'
import { CreateTransacaoDto } from '@/modules/transacao/dto/CreateTransacao.dto'
import { TransacaoService } from '@/modules/transacao/transacao.service'
import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common'

@Controller('transacao')
export class TransacaoController {
    constructor(
        private readonly transacaoService: TransacaoService
    ) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: CreateTransacaoDto, @Usuario() usuarioId: string){
        await this.transacaoService.create(body, usuarioId)
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Usuario() usuarioId: string){
        await this.transacaoService.findOne(id, usuarioId)
    }
}
