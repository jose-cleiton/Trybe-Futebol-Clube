import Users from '../../database/models/users.model';
import { ILoginRepository } from '../ILoginRepository';

export default class LoginRepository implements ILoginRepository {
  users = Users;
  async getUserByEmail(email: string): Promise<Users | null> {
    const user = await this.users.findOne({ where: { email } });
    return user;
  }
}
