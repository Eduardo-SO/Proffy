import { Router } from 'express';
import ConnectionsController from '../controllers/ConnectionsController';

const connectionsController = new ConnectionsController();

const classesRouter = Router();

classesRouter.get('/', connectionsController.index);
classesRouter.post('/', connectionsController.create);

export default classesRouter;
