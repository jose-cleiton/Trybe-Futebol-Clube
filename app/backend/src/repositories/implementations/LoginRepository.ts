import Users from '../../database/models/users.model';
import { ILoginRepository } from '../ILoginRepository';

export default class LoginRepository implements ILoginRepository {
  users = Users;
  getUserByEmail = async (email: string): Promise<Users | null> => this
    .users
    .findOne({ where: { email } });
}
