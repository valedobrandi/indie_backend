import { NextFunction, Request, Response, Router } from 'express';
import EmailController from '../controllers/email.controller';
import validateEmailAndMessage from '../middlewares/validateEmailAndMessage';

const emailController = new EmailController();

const router = Router();

router.post(
  '',
  (req: Request, res: Response, next: NextFunction) => validateEmailAndMessage(req, res, next),
  (req: Request, res: Response, next: NextFunction) => emailController.sendEmail(req, res, next),
);

router.get(
  '/count',
  (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => emailController.countSubscribes(req, res, next),
);

export default router;
