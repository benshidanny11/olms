import express from 'express';
import auth from '../utils/auth';
import HOD from '../controller/Hod';
const hodRouter = express.Router();

hodRouter.post('/postschedule',HOD.postSchedule);
hodRouter.get('/allcources',HOD.getAllCources);
export default hodRouter;