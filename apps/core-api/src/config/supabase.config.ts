import { registerAs } from '@nestjs/config'

export type SupabaseConfig = {
    url: string
    key: string
}

export default registerAs('supabase', () => ({
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
}))
