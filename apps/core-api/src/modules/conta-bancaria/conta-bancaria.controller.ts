import { Usuario } from '@/modules/auth/decorators/Usuario.decorator'
import { ContaBancariaService } from '@/modules/conta-bancaria/conta-bancaria.service'
import { CreateContaBancariaDto } from '@/modules/conta-bancaria/dto/CreateContaBancariaDto'
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Patch, Post } from '@nestjs/common'

@Controller('conta-bancaria')
export class ContaBancariaController {
    @Inject()
    private readonly contaBancariaService: ContaBancariaService
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: CreateContaBancariaDto, @Usuario() usuarioId: string){
        await this.contaBancariaService.create(body, usuarioId)
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Usuario() usuarioId: string){
        await this.contaBancariaService.findOne(id, usuarioId)
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateDto: Partial<CreateContaBancariaDto>,
        @Usuario() usuarioId: string
    ) {
        return await this.contaBancariaService.update(id, updateDto, usuarioId)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.contaBancariaService.remove(id)
    }

}
