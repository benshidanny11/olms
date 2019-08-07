import { USER_VERIFIED, USER_ROLE_ADMIN , USER_ROLE_CLIENT , LOAN_PENDING, LOAN_REJECTED, LOAN_APPROVED } from '../../utils/constants';

const queryString = {
  signup: 'INSERT INTO users(u_id,firstname,lastname,email,phone,userrole,admintype,username,password,createdon) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
  register: 'INSERT INTO lecturer(lect_id,fname,lname,email,phone,address,national_id,cv_doc_path,qualification_path_file,qualification,category,status) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)',
  addHod:'INSERT INTO hod_info(hod_id,fname,lname,email,phone,sch_id,dep_id) VALUES($1,$2,$3,$4,$5,$6,$7)',
  addDepartment:'INSERT INTO departments(dep_id,sch_id,dep_name,n_of_levels) VALUES($1,$2,$3,$4)',
  addSchedule:'INSERT INTO course_schedule(sched_id,course_code,qualification,experience,description,duration,posted_on) VALUES($1,$2,$3,$4,$5,$6,$7)',
  addCourse:'INSERT INTO courses(course_code,course_name,level,course_credits,dep_id) VALUES($1,$2,$3,$4,$5)',
  addSchool:'INSERT INTO schools(sch_id,shc_name) VALUES($1,$2)',
  addUniversity:'INSERT INTO university(univ_id,univ_name,province,district,sector,cell,village,street) VALUES($1,$2,$3,$4,$5,$6,$7,$8)',
  
  getAllSchools:'SELECT * FROM schools',
  getAllCourses:'SELECT * FROM courses NATURAL JOIN departments WHERE courses.dep_id=departments.dep_id',
  getAllSchedule:'SELECT * FROM course_schedule NATURAL JOIN courses WHERE course_schedule.course_code=courses.course_code',
  getAllHods:'SELECT * FROM hod_info',
  getAllHods1:'SELECT * FROM hod_info NATURAL JOIN schools NATURAL JOIN departments ',
  getAllLectulers:'SELECT * FROM lecturer',
  getAllDepartments:'SELECT * FROM departments NATURAL JOIN schools WHERE departments.sch_id=schools.sch_id',
  getAllAdmins:`SELECT * FROM users WHERE userrole='admin'`,
  getDepartmentId:'SELECT * from departments WHERE dep_name=$1',
  getChoolId:`SELECT * from schools WHERE shc_name=$1`,
  checkIfCourceExistsInShcedule:'SELECT * from course_schedule WHERE course_code=$1',
  getCourceCode:`SELECT course_code from courses WHERE course_name=$1`,
  login: `SELECT * FROM users WHERE email=$1 and password=$2`,
  getAllUser: 'SELECT * FROM users',
  getUserById: 'SELECT * FROM users WHERE u_id = $1',
  checkIfUserExists: 'SELECT * FROM lecturer WHERE email=$1 OR phone=$2 OR  national_id=$3',
  checkIfAdminExists:'SELECT * FROM users WHERE email=$1 OR phone=$2',
  chechIfHodExists:'SELECT * FROM hod_info WHERE email=$1 OR phone=$2',
  chechIfDepartmentExists:'SELECT * FROM departments WHERE dep_name=$1',
  chechIfSchoolExist:'SELECT * FROM schools WHERE shc_name=$1',
  verifyLecturer: 'UPDATE lecturer SET status=$1 WHERE email=$2',
  checkIfCourseExitist:'SELECT * from courses WHERE course_code=$1 OR course_name =$2',
  checkIfUserIsVerified: `SELECT status FROM users WHERE email=$1 AND status='${USER_VERIFIED}'`,
  resetPassword: 'UPDATE users SET password=$1 WHERE email=$2',
  getUserByPassword: 'SELECT * FROM users where password=$1',
  getAdminUser: `SELECT * FROM users where u_id=$1 and  userrole='admin'`,
  getHodUser:`SELECT * FROM users where u_id=$1 and  userrole='hod'`,
  getLecturerUser:`SELECT * FROM users where u_id=$1 and  userrole='lecturer'`,
  getDepById:'SELECT * FROM departments WHERE dep_id=$1',
  getschById:'SELECT * FROM schools WHERE sch_id=$1',
  apply: `INSERT INTO application
  (appl_id,lect_id,course_code,status,duration)
   VALUES($1,$2,$3,$4,$5)`,
   getUserRole:'SELECT userrole from users where email=$1',
  
};
export default queryString;
