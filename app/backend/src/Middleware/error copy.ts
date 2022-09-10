import { Request, Response, NextFunction } from 'express';

import Error from './ErrorType';

interface Ierr {

  [JsonWebTokenError: string]: { status: number, message: string };
  SequelizeForeignKeyConstraintError :{ status: number, message:string };
}
export default class Errors {
  static _error = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
    const status = error.status || 505;
    const message = error.message || 'Something went wrong';
    const err: Ierr = {
      JsonWebTokenError: { status: 401, message: 'Token must be a valid token' },
      SequelizeForeignKeyConstraintError: { status: 404, message: 'There is no team with such id!' },

    };

    const stat = err[error.name].status;
    const mess = err[error.name].message;

    err[error.name]
      ? res.status(stat).json({ message: mess })
      : res.status(status).json({ message });
  };
}
