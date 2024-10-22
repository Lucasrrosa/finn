import FiltroListaTransacao from '@/modules/transacoes/components/FiltroListaTransacao'
import { Stack } from '@mui/material'


export default function ListaTransacoes() {
    return (
        <Stack direction={'column'} gap={2}>
            <FiltroListaTransacao onSubmitFilter={(value) => console.log('Filtrando', value)} />
            <div>ListaTransacoes</div>
        </Stack>
    )
}
