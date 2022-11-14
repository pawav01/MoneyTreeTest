import express from 'express';
import dbSetup from './configs/db.js';
import { UserRoute } from './routes/UserRoute.js';
import { TransactionRoute }from './routes/TransactionRoute.js';
import asd from './controllers/UserController.js'
import qwe from './services/UserService.js'

const app = express();
const port = 3000;
app.use(express.json());

dbSetup();

app.use(UserRoute);
app.use(TransactionRoute);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});