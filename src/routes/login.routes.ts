import { NextFunction, Request, Response, Router } from 'express';
import UserController from '../controllers/UserController';
import validateLogin from '../middlewares/validateLogin';

const userController = new UserController();

const router = Router();

router.post(
  '',
  (req: Request, res: Response, next: NextFunction) => validateLogin(req, res, next),
  (req: Request, res: Response, next: NextFunction) => userController.login(req, res, next),
);

export default router;
