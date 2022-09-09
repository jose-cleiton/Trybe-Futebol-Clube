import { strVoid } from '../interfaces/Login';
import Error from '../Middleware/ErrorType';


export default class Validation {
 

  email_passoword(email: string, password: string) {
    if (!email || !password) {
      throw new Error(400, 'All fields must be filled');
    }

  }

  token(token:strVoid ) {
    if (token === 'null') {
      throw new Error(401, 'Incorrect email or password');
    }
    

  }


}
