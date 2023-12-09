import httpStatus from 'http-status';
import transactionService from '../services/transaction.service.js';

export async function newTransaction(req, res) {
  const { value, description, type } = req.body;
  const { authorization } = req.headers;

  await transactionService.newTransaction(
    { value, description, type },
    authorization,
  );

  res.sendStatus(httpStatus.CREATED);
}

export async function getTransactions(req, res) {
  const { authorization } = req.headers;

  const transactions = await transactionService.getTransactions(authorization);

  res.status(httpStatus.OK).send(transactions);
}
