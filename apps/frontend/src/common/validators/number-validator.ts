import { z } from 'zod'

export const numberValidator = (errorMessage?: string) => z.preprocess((val) => {
    if (typeof val === 'string') {
        const parsed = parseFloat(val.replace('.', '').replace(',', '.'))
        if (!isNaN(parsed)) return parsed
    }
    return val === '' ? undefined : val
}, z.number({required_error: errorMessage || 'Campo obrigatório'}))
