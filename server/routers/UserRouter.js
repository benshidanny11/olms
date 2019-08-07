//router.post('/login',Lectuer.login);
import express from 'express';
import User from '../controller/User';
import Admin from '../controller/Admin';
const userRouter = express.Router();
userRouter.post('/dashboard',User.login);

userRouter.post('/api/login',User.apiLogin);

export default userRouter;

