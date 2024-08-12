import { registerAs } from '@nestjs/config'

export type EnviromentConfigType = {
    nodenv: string
}

export default registerAs('enviroment', () => ({
    nodenv: process.env.NODENV,
}))
