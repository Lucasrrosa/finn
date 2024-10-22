import { formataMoeda } from '@/common/utils/formatters'
import { ITransacaoBancariaResponseDto } from '@finn/api-contracts'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import ReceiptIcon from '@mui/icons-material/Receipt'
import { IconButton, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
    item: ITransacaoBancariaResponseDto
}

export default function TransacaoListItem({item}: Props) {
    return (
        <ListItem
            secondaryAction={
                <Stack direction={'row'} alignItems={'center'}>
                    <Typography variant='body1' fontWeight={700} color={item.valor < 0 ? 'error.main' : 'success.main'}>
                        {formataMoeda(item.valor)}
                    </Typography>
                    <Link to={`/transacoes/${item.id}`}><IconButton><FindInPageIcon/></IconButton></Link>
                </Stack>
            }
        >
            <ListItemIcon>
                <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary={item.descricao} />
        </ListItem>
    )
}
