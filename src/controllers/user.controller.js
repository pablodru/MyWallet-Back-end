import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import userService from "../services/user.service.js";
import httpStatus from "http-status";

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
