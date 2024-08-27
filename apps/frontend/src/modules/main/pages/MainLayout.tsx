import { useStore } from '@/common/hooks/useStore'
import MainAppBar from '@/modules/main/components/MainAppBar'
import MainBottomNavigation from '@/modules/main/components/MainBottomNavigation'
import MainContent from '@/modules/main/components/MainContent'
import MainLayoutContainer from '@/modules/main/components/MainLayoutContainer'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
    const nomeUsuario = useStore(s => s.autenticacao.usuarioLogado?.nomeUsuario || '')
    
    return (
        <MainLayoutContainer>
            <MainAppBar userName={nomeUsuario}/>
            <MainContent>
                <Outlet/>
            </MainContent>
            <MainBottomNavigation />
        </MainLayoutContainer>
    )
}
