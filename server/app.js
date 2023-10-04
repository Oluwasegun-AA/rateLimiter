import express from 'express';
import dotenv from 'dotenv';

import { catchAllError, connectionMessage } from '../helpers';
import serverMiddleWares from '../middlewares/serverMiddlewares';

dotenv.config();
const app = express();
const { PORT=5000 } = process.env;

serverMiddleWares(app);

catchAllError(app);

const server = app.listen(PORT, ()=> connectionMessage(PORT));

// export app for testing purpose
export {server, app};
