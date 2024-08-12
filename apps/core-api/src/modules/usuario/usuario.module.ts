import { UsuarioEntity } from '@/modules/usuario/entities/usuario.entity';
import { UsuarioRepository } from '@/modules/usuario/usuario.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from './usuario.service';

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    providers: [UsuarioService, UsuarioRepository],
    exports: [UsuarioService]
})
export class UsuarioModule {}
