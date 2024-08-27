import { useStore } from '@/common/hooks/useStore'
import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'


export default function PrivatePage({children}: PropsWithChildren) {
    const isUsuarioAutenticado = useStore(state => !!state.autenticacao.usuarioLogado)

    if(!isUsuarioAutenticado) return <Navigate to='/login'/>
    
    return children
}
