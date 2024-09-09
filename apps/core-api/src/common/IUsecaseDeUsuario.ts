export interface IUsecaseDeUsuario<Params, Response> {
    execute(params: Params, usuarioId: string): Promise<Response> | Response
}
