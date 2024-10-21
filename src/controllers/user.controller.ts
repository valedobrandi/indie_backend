import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const { status, data } = await this.userService.login(email, password);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }
}
