import { Usuario } from '@/modules/auth/decorators/Usuario.decorator'
import { CreateTransacaoDto } from '@/modules/transacao/dto/CreateTransacao.dto'
import { CategoriaTransacaoService } from '@/modules/transacao/services/categoria-transacao.service'
import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post } from '@nestjs/common'

@Controller('categoria-transacao')
export class CategoriaTransacaoController {
    
    @Inject()
    private readonly categoriaTransacaoService: CategoriaTransacaoService


    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: CreateTransacaoDto, @Usuario() usuarioId: string){
        await this.categoriaTransacaoService.create(body, usuarioId)
    }

    @Get()
    async getByFiltro(@Usuario() usuarioId: string) {
        return await this.categoriaTransacaoService.getAll(usuarioId)
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Usuario() usuarioId: string) {
        return await this.categoriaTransacaoService.findOne(id, usuarioId)
    }
}
