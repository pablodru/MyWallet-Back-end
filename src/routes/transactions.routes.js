import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.js';
import { schemaTransation } from '../schemas/transaction.schema.js';
import { getTransactions, newTransaction } from '../controllers/transaction.controller.js';

const transactionRouter = Router();

transactionRouter.post('/transation', validateSchema(schemaTransation), newTransaction);
transactionRouter.get('/transation', getTransactions);

export default transactionRouter;
