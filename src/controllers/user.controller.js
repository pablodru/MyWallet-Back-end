import httpStatus from 'http-status';
import userService from '../services/user.service.js';

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  await userService.signUp(name, email, password);

  return res.sendStatus(httpStatus.CREATED);
}

export async function signIn(req, res) {
  const { email, password } = req.body;

  const response = await userService.signIn(email, password);

  res.status(httpStatus.OK).send(response);
}
