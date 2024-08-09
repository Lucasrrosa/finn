import { store } from '@/configs/store/store'
import { LocalizationProvider } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import utc from 'dayjs/plugin/utc'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { ROUTES_CONFIG } from '@/configs/routes/routes-config'
import theme from '@/configs/store/theme'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { ptBR as datepickersPtBR } from '@mui/x-date-pickers/locales'
import { RouterProvider } from 'react-router-dom'

dayjs.extend(utc)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <LocalizationProvider
                adapterLocale='pt-br'
                localeText={datepickersPtBR.components.MuiLocalizationProvider.defaultProps.localeText}
                dateAdapter={AdapterDayjs}
            >
                <ThemeProvider theme={theme}>
                    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                        <CssBaseline />
                        <RouterProvider router={ROUTES_CONFIG} />
                    </SnackbarProvider>
                </ThemeProvider>
            </LocalizationProvider>
        </Provider>
    </React.StrictMode>,
)
