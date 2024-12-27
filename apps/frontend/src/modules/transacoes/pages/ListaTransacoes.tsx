import { PaginatedList } from '@/common/components/PaginatedList'
import FiltroListaTransacao from '@/modules/transacoes/components/FiltroListaTransacao'
import TransacaoListItem from '@/modules/transacoes/components/TransacaoListItem'
import { useGetTransacaoByFiltroQuery } from '@/modules/transacoes/store/transacao-api-slice'
import { IFiltroTransacao, ITransacaoBancariaResponseDto } from '@finn/api-contracts'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { Button, Card, CardHeader, Stack, Typography } from '@mui/material'
import { useState } from 'react'


export default function ListaTransacoes() {

    const [filter, setFilter] = useState<IFiltroTransacao>({ page: 1, pageSize: 10 })
    const { data, isLoading } = useGetTransacaoByFiltroQuery(filter)

    const onFilter = (filtro: IFiltroTransacao) => {
        setFilter(f => ({ ...f, ...filtro }))
    }
    return (
        <Stack direction={'column'} gap={2}>
            <Card variant='outlined'>
                <CardHeader
                    title={
                        <Stack direction={'row'} justifyContent={'space-between'}>
                            <Typography variant='h6'>Transações bancarias</Typography>
                            <Button href='criar' variant='text'>Criar nova</Button>
                        </Stack>
                    }
                    avatar={<ReceiptIcon />}  />
            </Card>
            <FiltroListaTransacao onSubmitFilter={onFilter} />
            <PaginatedList<ITransacaoBancariaResponseDto>
                ItemComponent={(item) => <TransacaoListItem item={item} />}
                data={data?.data || []}
                page={filter.page}
                pageSize={filter.page}
                onChangePage={(value) => setFilter(f => ({ ...f, page: value}))}
                onChangePageSize={(value) => setFilter(f => ({ ...f, pageSize: value}))}
                total={data?.total || 0}
                noResultText='Nenhuma transacao encontrada'
                isLoading={isLoading}
                getItemKey={item => item.id}
            />
        </Stack>
    )
}
