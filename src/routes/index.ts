import { Router } from 'express';

import emailRouter from './email.routes';

const router = Router();

router.use('/email', emailRouter);

export default router;
