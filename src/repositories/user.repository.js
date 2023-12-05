import { db } from "../database/database.connection.js";

async function findUser (email) {
    return await db.collection("users").findOne({ email });
}

async function createUser(body) {
    return await db.collection("users").insertOne(body);
}

async function deleteSessions(userId) {
    return await db.collection("session").deleteMany({ userId });
}

async function createSession(body) {
    return await db.collection("session").insertOne(body);
}


const userRepository = {findUser, createUser, deleteSessions, createSession};

export default userRepository;