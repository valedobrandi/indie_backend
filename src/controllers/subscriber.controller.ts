import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import SubscriberService from '../services/subscriber.service';

export default class SubscriberController {
  constructor(private subscriberService = new SubscriberService()) {}

  public async subscriberEmail(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, message } = req.body;

      if (!email || !message) {
       return res.status(400).json({ message: 'Missing required fields' });
      }

      const { status, data } = await this.subscriberService.sendEmail(email, message);
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }

  public async countSubscribes(req: Request, res: Response, next: NextFunction) {
    try {
      const { status, data } = await this.subscriberService.countSubscribes();
      res.status(mapStatusHTTP(status)).json(data);
    } catch (error) {
      next(error);
    }
  }
}
