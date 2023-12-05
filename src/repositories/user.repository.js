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

async function getSession(token) {
    return await db.collection("session").findOne({ token });
}

async function findUserById(userId) {
    return await db.collection("users").findOne({ _id: userId });
}


const userRepository = {findUser, createUser, deleteSessions, createSession, getSession, findUserById};

export default userRepository;