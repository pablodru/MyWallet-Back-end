import { db } from "../database/database.connection.js";

async function findUser (email) {
    return await db.collection("users").findOne({ email });
}

async function createUser(body) {
    return await db.collection("users").insertOne(body);
}

const userRepository = {findUser, createUser};

export default userRepository;