import { LinkBehavior } from '@/common/components/LinkBehaviour'
import { LinkProps } from '@mui/material'
import { createTheme } from '@mui/material/styles'



const theme = createTheme({
    palette: {
        primary: {
            main: '#547e7d',
        },
        secondary: {
            main: '#aa62a8',
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehavior,
            } as LinkProps,
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehavior,
            },
        },
    },
})

export default theme
