import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import userRepository from "../repositories/user.repository.js";
import conflictError from "../errors/conflict.error.js";
import notFoundError from "../errors/notFound.error.js";
import unAuthorizedError from "../errors/unAuthorized.error.js";

async function signUp(name, email, password) {
	const existingUser = await userRepository.findUser(email);
	if (existingUser) throw conflictError();

	const hash = bcrypt.hashSync(password, 10);
	const body = { name, email, password: hash };

	const user = await userRepository.createUser(body);
	return user;
}

async function signIn(email, password) {
	const user = await userRepository.findUser(email);
	if (!user) throw notFoundError();

	const correctPassword = bcrypt.compareSync(password, user.password);
	if (!correctPassword) throw unAuthorizedError()

    await userRepository.deleteSessions(user._id);

	const token = uuid();
	const body = { token, userId: user._id };
	await userRepository.createSession(body);
    return {token, name: user.name};
}

const userService = {
	signUp,
	signIn,
};

export default userService;
