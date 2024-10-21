import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import EmailService from '../services/email.service';

export default class EmailController {
  constructor(private emailService = new EmailService()) {}

  public async sendEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, message } = req.body;

      if (!email || !message) {
       return res.status(400).json({ message: 'Missing required fields' });
      }

      const { status, data } = await this.emailService.sendEmail(email, message);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async countSubscribes(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.emailService.subscribes();
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }
}
