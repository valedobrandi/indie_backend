import { Router } from 'express';
import subscriberRouter from './subscriber.routes';
import quizRouter from './quiz.routes';
import rankingRouter from './ranking.routes';

const router = Router();

router.use('/subscriber', subscriberRouter);
router.use('/quiz', quizRouter);
router.use('/ranking', rankingRouter);

export default router;
