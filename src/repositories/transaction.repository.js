import { db } from "../database/database.connection.js";

async function createTransaction(body) {
    return await db.collection("transations").insertOne(body);
}

const transactionRepository = {createTransaction};

export default transactionRepository;