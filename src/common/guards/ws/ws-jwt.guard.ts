import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { WsException } from '@nestjs/websockets';
import { AuthService } from 'src/modules/auth/auth.service';

import { Socket } from 'socket.io';

@Injectable()
export class WsAuthGuard extends AuthGuard('jwt') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const client: Socket = context.switchToWs().getClient<Socket>();
      const authToken: string = client.handshake.headers.authorization;
      // !BUG: WsException not working ()
      if (!authToken) {
        throw new WsException('Unauthorized');
      }
      return Boolean(true);
    } catch (err) {
      throw new WsException(err.message);
    }
  }

  getRequest(context: ExecutionContext) {
    const ctx = context.switchToWs().getClient();
    return {
      headers: {
        authorization: ctx.handshake.headers.authorization,
      },
    };
  }
}
