import { z } from 'zod'

export const IdDescricaoSchema = z.object({
    id: z.string(),
    descricao: z.string()
})
