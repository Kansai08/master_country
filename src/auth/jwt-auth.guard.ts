import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    console.log('AUTH HEADER:', request.headers);
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Missing or invalid token');
    }

    const token = authHeader.replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!);
      request.user = decoded;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
