import FormTextField from '@/common/components/form-fields/FormTextField'
import { useStore } from '@/common/hooks/useStore'
import { useAutenticarUsuarioMutation } from '@/modules/auth/store/auth-api-slice'
import { zodResolver } from '@hookform/resolvers/zod'
import LoadingButton from '@mui/lab/LoadingButton'
import { Card, Container, Link, Stack, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { z } from 'zod'

const loginSchema = z.object({
    email: z.string().email(),
    senha: z.string(),
})

type loginSchemaType = z.infer<typeof loginSchema>

export const LogInPage = () => {
    const isUsuarioAutenticado = useStore(store => !!(store.autenticacao.usuarioLogado))
    const {control, handleSubmit} = useForm<loginSchemaType>({resolver: zodResolver(loginSchema)})
    const [autenticar, { isLoading}] = useAutenticarUsuarioMutation()

    const onSubmit = (data: loginSchemaType) => {
        autenticar({
            email: data.email,
            senha: data.senha
        })
    }

    if(isUsuarioAutenticado)
        return <Navigate to='/' replace />
    
    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card variant="outlined" sx={{ p: 2, maxWidth: 400 }}>
                <Stack direction={'column'} spacing={2} alignItems={'stretch'}>
                    <FormTextField control={control} name='email' label='Email' fullWidth />
                    <FormTextField control={control} name='senha' label='Senha' fullWidth type='password' />
                    <LoadingButton variant='contained' loading={isLoading} onClick={handleSubmit(onSubmit)} fullWidth>Entrar</LoadingButton>
                    <Link href="auth/registrar"><Typography variant='overline' >Cadastre-se</Typography></Link>
                </Stack>
            </Card>
        </Container>
    )
}
