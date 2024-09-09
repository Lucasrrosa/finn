import { Usuario } from '@/modules/auth/decorators/Usuario.decorator'
import { ContaBancariaService } from '@/modules/conta-bancaria/conta-bancaria.service'
import { CreateContaBancariaDto } from '@/modules/conta-bancaria/dto/CreateContaBancariaDto'
import { GetAllContaBancaria } from '@/modules/conta-bancaria/usecases/GetAllContaBancaria.usecase'
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, Patch, Post } from '@nestjs/common'

@Controller('conta-bancaria')
export class ContaBancariaController {
    @Inject()
    private readonly contaBancariaService: ContaBancariaService

    @Inject()
    private readonly getAllContaBancaria: GetAllContaBancaria
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: CreateContaBancariaDto, @Usuario() usuarioId: string){
        await this.contaBancariaService.create(body, usuarioId)
    }

    @Get(':id')
    async findOne(@Param('id') id: string, @Usuario() usuarioId: string){
        await this.contaBancariaService.findOne(id, usuarioId)
    }

    @Get()
    async findAll(@Usuario() usuarioId) {
        return await this.getAllContaBancaria.execute(usuarioId)
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
