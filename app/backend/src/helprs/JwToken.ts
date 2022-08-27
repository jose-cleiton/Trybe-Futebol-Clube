import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { Request } from 'express';
import User from '../interfaces/User';
import Error from '../Middleware/ErrorType';

dotenv.config();

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default class JwToken {
  static create(payload: Omit<User, 'password'>): string {
    const jwtConfig: jwt.SignOptions = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: payload }, secret, jwtConfig);
    return token;
  }

  static verify(token: string) {
    const payload = jwt.verify(token, secret);
    const { data } = payload as jwt.JwtPayload;
    const { role } = data;
    return role;
  }

  jwtValidation = (req: Request) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error(401, 'Token must be a valid token');
    }
    if (token) {
      const payload = JwToken.verify(token);
      if (!payload || payload === null) {
        throw new Error(401, 'Token must be a valid token');
      }
    }
  };
}
