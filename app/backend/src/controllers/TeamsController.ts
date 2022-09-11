import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export default class TeamController {
  constructor(private service: TeamsService) {}

  getAll = async (req: Request, res: Response) => {
    const result = await this.service.getAll();
    return res.status(200).json(result);
  };

  getById = async (req: Request, res: Response) => {
    const result = await this.service.getById(Number(req.params.id));

    return res.status(200).json(result);
  };
}
