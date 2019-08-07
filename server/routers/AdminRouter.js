import express from 'express';
import auth from '../utils/auth';
import Admin from '../controller/Admin';
const adminRouer = express.Router();

adminRouer.post('/addadmin',Admin.addAdmin);
adminRouer.get('/alladmins',Admin.getAllAdmins);
adminRouer.post('/addhod',Admin.addHod);
adminRouer.get('/api/allhods',auth.verifyToken,Admin.getAllHods);
adminRouer.post('/adddepartment',Admin.addDepartment);
adminRouer.post('/addschool',Admin.addSchool);
adminRouer.post('/addcource',Admin.addCource);
adminRouer.get('/allhods',Admin.getAllHods);
adminRouer.get('/alllecturers',Admin.allLecturers);
adminRouer.get('/allschools',Admin.allFaculties);
adminRouer.get('/alldepartments',Admin.allDepartments);
adminRouer.get('/allcources',Admin.allCourses);
export default adminRouer;