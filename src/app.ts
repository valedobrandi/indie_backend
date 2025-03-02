import * as express from 'express';
import * as cors from 'cors';
import 'express-async-errors';
import router from './routes';
import errorMiddleware from './middlewares/errorMiddleware';
import { Response, Request } from 'express';
import sequelize from './database/models';


class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.routes();

    // Não remover essa rota
    this.app.get('/', (_: Request, res: Response) => res.status(200).json({ ok: true }));

    // Não remova esse middleware de erro, mas fique a vontade para customizá-lo.
    // Mantenha ele sempre como o último middleware a ser chamado.
    this.app.use(errorMiddleware);
  }

  private config():void {

    const corsOptions = { 
      origin: [
        'http://localhost:5432', 
      ],
      optionsSuccessStatus: 200
    };
    this.app.use(express.json());
    this.app.use(cors(corsOptions));
  }

  private routes(): void {
    this.app.use(router);
  }

  public async assertDatabaseConnection(): Promise<void> {
    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.log('Unable to connect to the database:', error);
    }
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
