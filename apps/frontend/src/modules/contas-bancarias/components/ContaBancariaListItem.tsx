import { formataMoeda } from '@/common/utils/formatters'
import { IContaBancariaResponseDto } from '@finn/api-contracts'
import FindInPageIcon from '@mui/icons-material/FindInPage'
import WalletIcon from '@mui/icons-material/Wallet'
import { IconButton, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

type Props = {
    contaBancaria: IContaBancariaResponseDto
}

export const ContaBancariaListItem = ({ contaBancaria }: Props) => {
    return (
        <ListItem
            secondaryAction={
                <Stack direction={'row'} alignItems={'center'}>
                    <Typography variant='body1' fontWeight={700} color={contaBancaria.saldoAtual < 0 ? 'error.main' : 'success.main'}>
                        {formataMoeda(contaBancaria.saldoAtual)}
                    </Typography>
                    <Link to={`/conta-bancaria/${contaBancaria.id}`}><IconButton><FindInPageIcon/></IconButton></Link>
                </Stack>
            }
        >
            <ListItemIcon>
                <WalletIcon />
            </ListItemIcon>
            <ListItemText primary={contaBancaria.nome} />
        </ListItem>
    )
}
