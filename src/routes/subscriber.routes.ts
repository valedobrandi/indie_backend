import { NextFunction, Request, Response, Router } from 'express';
import SubscriberController from '../controllers/subscriber.controller';
import validateEmailAndMessage from '../middlewares/validateEmailAndMessage';

const subscriberControllerController = new SubscriberController();

const router = Router();

router.post(
  '',
  (req: Request, res: Response, next: NextFunction) => validateEmailAndMessage(req, res, next),
  (req: Request, res: Response, next: NextFunction) => subscriberControllerController.subscriberEmail(req, res, next),
);

router.get(
  '/count',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => subscriberControllerController.countSubscribes(req, res, next),
);

export default router;
