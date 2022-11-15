import express from 'express';
import dbSetup from './configs/db.js';
import { UserRoute } from './routes/UserRoute.js';
import { TransactionRoute }from './routes/TransactionRoute.js';
import { AccountRoute } from './routes/AccountRoute.js';
import { CategoryRoute } from './routes/CategoryRoute.js';
import { TaskRoute } from './routes/TaskRoute.js';

const app = express();
const port = 3000;
app.use(express.json());

dbSetup();

app.use(UserRoute);
app.use(TransactionRoute);
app.use(AccountRoute);
app.use(CategoryRoute);
app.use(TaskRoute);


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});