import { Request, Response } from 'express';

export default class UsersController {
  async create(request: Request, response: Response) {
    const {email, password} = request.body;

    return response.json({email, password});
  }
}
