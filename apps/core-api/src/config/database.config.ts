import { registerAs } from '@nestjs/config'
export type DatabaseConfig = {
    url: string
    host: string,
    user: string,
    port: number,
    name: string,
    pass: string,
}

export default registerAs('database', () => ({
    url: process.env.DATABASE_URL,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 5432,
    name: process.env.DATABASE_NAME,
    pass: process.env.DATABASE_PASS,
}))
