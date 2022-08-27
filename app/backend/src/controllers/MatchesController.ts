import { Request, Response } from 'express';

import MatchesService from '../services/MatchesServices';
import Error from '../Middleware/ErrorType';

export default class MatchesController {
  service = new MatchesService();

  get = async (_req: Request, res: Response) => {
    const result = await this.service.get();
    return res.status(200).json(result);
  };

  post = async (req: Request, res: Response) => {
    const newResult = await this.service.post(req.body);
    if (!newResult) {
      throw new Error(404, 'There is no team with such id!');
    }
    if (newResult === 'sameteam') {
      throw new Error(401, 'It is not possible to create a match with two equal teams');
    }
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
