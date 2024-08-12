import { registerAs } from '@nestjs/config'
export type DatabaseConfig = {
    url: string
}

export default registerAs('database', () => ({
    url: process.env.DATABASE_URL,
}))
