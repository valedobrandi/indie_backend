import { Router } from 'express';
import loginRouter from './login.routes';
import emailRouter from './email.routes';

const router = Router();

router.use('/login', loginRouter);

router.use('/email', emailRouter);

export default router;
