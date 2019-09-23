import express from 'express';
import auth from '../utils/auth';
import HOD from '../controller/Hod';
const hodRouter = express.Router();

hodRouter.post('/postschedule',HOD.postSchedule);
hodRouter.get('/allcourcesforhod/:id',HOD.getAllCourcesForHod);
hodRouter.get('/verifiedlecturers/:id',HOD.getVerifiedLecturer);
hodRouter.get('/allschedules',HOD.getAllSchedures);
hodRouter.get('/allapplication',HOD.getAllApplications);
export default hodRouter;