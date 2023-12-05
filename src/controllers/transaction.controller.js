import { db } from "../database/database.connection.js";
import transactionService from "../services/transaction.service.js";
import httpStatus from "http-status";


export async function newTransaction (req, res) {
    const { value, description, type } = req.body;
    const { authorization } = req.headers;

    await transactionService.newTransaction({value, description, type}, authorization);
    
    res.sendStatus(httpStatus.CREATED);
}

export async function getTransactions (req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if ( !token ) return res.sendStatus(401);

    try {

        const session = await db.collection("session").findOne({ token });
        if ( !session ) return res.sendStatus(401);
        const user = await db.collection("users").findOne({_id: session.userId});

        const transations = await db.collection("transations").find({ name: user.name }).toArray();
        const finalTransations = transations.reverse();
        
        res.status(200).send(finalTransations);

    } catch (err) {
        res.status(500).send(err.message)
    }
}