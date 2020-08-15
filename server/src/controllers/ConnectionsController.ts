import { Request, Response } from 'express';

import Connection from '../models/Connection';

import db from '../database/connection';

export default class ConnectionsController {
  async index(request: Request, response: Response) {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return response.json({ total });
  }

  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    const connection = new Connection(user_id);

    await db('connections').insert(connection);

    return response.status(201).send();
  }
}