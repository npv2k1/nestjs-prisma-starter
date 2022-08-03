// import { WsAuthGuard } from './ws-jwt.guard';
// import { ExecutionContext, Injectable } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Role } from '@prisma/client';

// @Injectable()
// export class WsRolesGuard extends WsAuthGuard {
//   constructor(private reflector: Reflector, private authService: AuthService) {
//     super(authService);
//   }
//   async canActivate(context: ExecutionContext) {
//     await super.canActivate(context);
//     const roles = this.reflector.getAllAndOverride<Role[]>('roles', [
//       context.getHandler(),
//       context.getClass(),
//     ]);

//     if (!roles) return true;
//     const { user } = context.switchToHttp().getRequest();
//     console.log('user', user);
//     return roles.some((role) => user.role === role);
//   }
// }
