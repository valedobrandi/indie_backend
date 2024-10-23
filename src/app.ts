import * as express from 'express';
import * as cors from 'cors';
import 'express-async-errors';
import router from './routes';
import errorMiddleware from './middlewares/errorMiddleware';

const URL_BACKEND = process.env.CORS_CONFIG || ''

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.routes();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.status(200).json({ ok: true }));

    // Não remova esse middleware de erro, mas fique a vontade para customizá-lo.
    // Mantenha ele sempre como o último middleware a ser chamado.
    this.app.use(errorMiddleware);
  }

  private config():void {

    const corsOptions = { origin: [URL_BACKEND, 'http://localhost:3000' ]};
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
