import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const Usuario = createParamDecorator((data: unknown, ctx: ExecutionContext): string => {
    const request = ctx.switchToHttp().getRequest()
    return request.userInfo.userId
})
