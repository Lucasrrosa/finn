import { BaseVariant, enqueueSnackbar } from 'notistack'

export const showNotification = (message: string, variant: BaseVariant = 'default') => enqueueSnackbar({ message, variant })
