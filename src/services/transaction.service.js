import dayjs from "dayjs";
import unAuthorizedError from "../errors/unAuthorized.error.js";
import transactionRepository from "../repositories/transaction.repository.js";
import userRepository from "../repositories/user.repository.js";

async function newTransaction(bodyReq, authorization) {
	const { value, description, type } = bodyReq;

	const user = await validateSession(authorization);

	const day = dayjs().format("DD-MM");

	const body = { value, description, type, day, name: user.name };
	const transaction = await transactionRepository.createTransaction(body);

	return transaction;
}

async function getTransactions(authorization) {
	const user = await validateSession(authorization);

	const transations = await transactionRepository.getTransactions(user.name);
	return transations.reverse();
}

async function validateSession(authorization) {
	const token = authorization?.replace("Bearer ", "");
	if (!token) throw unAuthorizedError("Token não enviado corretamente.");

	const session = await userRepository.getSession(token);
	if (!session) throw unAuthorizedError("Token não enviado corretamente.");

	const user = await userRepository.findUserById(session.userId);
	return user;
}

const transactionService = { newTransaction, getTransactions };

export default transactionService;
