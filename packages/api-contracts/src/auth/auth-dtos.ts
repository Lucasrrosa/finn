export interface IRefreshTokenParamDto {
    refreshToken: string
}

export interface IAtualizarTokenResponseDto {
    token: string
    expiraEm: number
}


export interface IRegistrarParamsDto {
    nomeUsuario: string
    email: string
    senha: string
}


export interface IAutenticarResponseDto {
    token: string
    refreshToken: string
    nomeUsuario: string
}


export interface IAutenticarParamsDto {
    email: string
    senha: string
}
