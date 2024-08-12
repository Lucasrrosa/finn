import { Usuario } from '@/modules/usuario/models/Usuario';
import { UsuarioRepository } from '@/modules/usuario/usuario.repository';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {
    @Inject()
    private readonly usuarioRepository: UsuarioRepository

    async getByAuthId(authId: string): Promise<Usuario> {
        const user = await this.usuarioRepository.findByAuthId(authId)

        if (!user) throw new Error('Usuário não encontrado')
        return {
            
            email: user.email,
            nome: user.nome,
            id: user.id,
            authId: user.authId
        }
    }

    async createUsuario(usuario: Usuario): Promise<Usuario> {
        const usuarioEntity = this.usuarioRepository.create(usuario)
        const result = await this.usuarioRepository.save(usuarioEntity)
        return {
            
            email: result.email,
            nome: result.nome,
            id: result.id,
            authId: result.authId
        }
    }

    async alreadyExistsUsuarioSameEmail(email: string): Promise<boolean> {
        const result = await this.usuarioRepository.exists({
            where: {
                email
            }
        })
        return result
    }
}
