import { db } from "../database/database.connection.js";

async function createTransaction(body) {
    return await db.collection("transations").insertOne(body);
}

async function getTransactions(name) {
    return await db.collection("transations").find({ name }).toArray();
}

const transactionRepository = {createTransaction, getTransactions};

export default transactionRepository;