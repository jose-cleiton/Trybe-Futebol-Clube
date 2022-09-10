import { Request, Response } from 'express';
import Validation from '../validation/Validation';
import TeamsService from '../services/LeamsService';

export default class TeamController {
  validation = new Validation()
  service = new TeamsService()

  get = async (req: Request, res: Response) => {
    const result = await this.service.get();
    return res.status(200).json(result);
  };

  getById = async (req: Request, res: Response) => {
    const result = await this.service.getById(Number(req.params.id));
    Validation.getById(res, result);
    
  };
}
