import { Request, Response } from 'express';
import TeamsService from '../services/LeamsService';

export default class TeamController {
  service = new TeamsService()

  



  get = async (req: Request, res: Response) => {
    const result = await this.service.get();
    return res.status(200).json(result);
  };

  getById = async (req: Request, res: Response) => {
    const result = await this.service.getById(Number(req.params.id));
    if (!result) {
      return res.status(404).json({ message: 'Team not found' });
    }
    return res.status(200).json(result);
  };
}
