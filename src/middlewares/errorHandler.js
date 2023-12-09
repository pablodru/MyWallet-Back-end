import httpStatus from 'http-status';

export function handleApplicationError(err, _req, res, _next) {
  const errors = ['conflictError', 'notFoundError', 'unAuthorizedError'];

  if (errors.includes(err.name)) {
    return res.status(err.status).send(err.message);
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Desculpe, erro interno do servidor.' });
}
