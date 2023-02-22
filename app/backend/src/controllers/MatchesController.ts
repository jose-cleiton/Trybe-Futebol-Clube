import { Request, Response } from 'express';

import MatchesService from '../services/MatchesServices';

export default class MatchesController {
  static make(): MatchesController {
    throw new Error('Method not implemented.');
  }
  start() {
    throw new Error('Method not implemented.');
  }
  constructor(private service : MatchesService) {}

  get = async (_req: Request, res: Response) => {
    const result = await this.service.getAllIncludeTeamName();
    return res.status(200).json(result);
  };

  post = async (req: Request, res: Response) => {
    const newResult = await this.service.saveNewMatch(req.body);

    return res.status(201).json(newResult);
  };

  putProgress = async (req: Request, res: Response) => {
    await this.service.putProgress(Number(req.params.id));
    res.status(200).json({ message: 'Finished' });
  };

  putGoals = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.putGoals(Number(id), req.body);
    res.status(200).json({ message: 'Goals update' });
  };
}
