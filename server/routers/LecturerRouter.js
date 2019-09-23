import express from 'express';
import Lectuer from '../controller/Lecturer';
import auth from '../utils/auth';
const LecturerRouter = express.Router();
LecturerRouter.post('/register', Lectuer.register);
LecturerRouter.post('/apply', Lectuer.apply);
LecturerRouter.get('/allschedules',Lectuer.getAllSchedures);

export default LecturerRouter;