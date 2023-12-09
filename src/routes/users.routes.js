import { Router } from 'express';
import { schemaLogin, schemaRegister } from '../schemas/user.schema.js';
import { signIn, signUp } from '../controllers/user.controller.js';
import { validateSchema } from '../middlewares/validateSchema.js';

const userRouter = Router();

userRouter.post('/signup', validateSchema(schemaRegister), signUp);
userRouter.post('/signin', validateSchema(schemaLogin), signIn);

export default userRouter;
