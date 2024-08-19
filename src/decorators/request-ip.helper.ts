import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const IpAddress = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    return Array.isArray(ip) ? ip[0] : ip;
  },
);
