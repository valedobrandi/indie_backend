import { NextFunction, Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import validateEmailAndMessage from './validations/validateEmailAndMessage';

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, message } = req.body;
  try {
    const error = validateEmailAndMessage({ email, message });

    if (error) {
      return res.status(mapStatusHTTP(error.status))
        .json(error.data);
    }

    return next();
  } catch (error) {
    next(error);
  }
};

export default validateLogin;
