import * as express from 'express';
import 'express-async-errors';
import Errors from './Middleware/error';
import LeaderboardRoutes from './routes/leardBoard.routes';
import LoginRoutes from './routes/login.routes';
import MatchesRoutes from './routes/matches.routes';
import TeamRoutes from './routes/teams.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/login', new LoginRoutes().router);
    this.app.use('/teams', new TeamRoutes().router);
    this.app.use('/matches', new MatchesRoutes().router);
    this.app.use('/leaderboard/', new LeaderboardRoutes().router);
    this.app.use(Errors._error);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
