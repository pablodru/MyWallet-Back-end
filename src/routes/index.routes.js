import { Router } from "express";
import userRouter from "./users.routes";
import transactionRouter from "./transactions.routes";

const router = Router();

router.use(userRouter);
router.use(transactionRouter);

export default router;