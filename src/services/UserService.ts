import { compareSync } from 'bcryptjs';
import UserModel from '../models/UserModel';
import { IUserModel } from '../Interfaces/users/IUserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { jwtSign } from '../utils/jwt.util';

export default class UserService {
  constructor(private userModel: IUserModel = new UserModel()) {}

  async login(email: string, password: string): Promise<ServiceResponse<{ token: string }>> {
    const user = await this.userModel.findUser(email);

    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const validPassword = compareSync(password, user.password);

    if (!validPassword || password.length < 6) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const token = jwtSign({ email });

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
