import Users from '../../database/models/users.model';
import { ILoginRepository } from '../ILoginRepository';

export default class LoginRepository implements ILoginRepository {
  async getUserByEmail(email: string): Promise<Users | null> {
    const user = await Users.findOne({ where: { email } });
    return user;
  }
}
