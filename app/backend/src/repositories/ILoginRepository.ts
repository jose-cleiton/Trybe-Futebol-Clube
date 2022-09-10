import Users from '../database/models/users.model';

export interface ILoginRepository {

  getUserByEmail(email:string): Promise<Users | null>

}
