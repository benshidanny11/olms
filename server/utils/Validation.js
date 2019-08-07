import joi from 'joi';

class Validator {
  constructor() {
    this.Validate = {
      loginSchema: joi.object().keys({
        user_email: joi.string().email().required(),
        user_password: joi.string().min(5).required(),
      }),
      lectRegisterSchema: joi.object().keys({
        email: joi.string().email().required(),
        fname: joi.string().min(1).required(),
        lname: joi.string().min(1).required(),
        password: joi.string().min(8).required(),
        address: joi.string().min(3).required(),
        phone:joi.string().required(),
        address:joi.string().required(),
        nationalid:joi.string().required(),
        qualification:joi.string().required(),
        category:joi.string().required(),
        lectabout:joi.any().meta({swaggerType: 'file'})
        .optional()
        .allow('')
        .description('pdf file'),
           
      }),
      apply:joi.object().keys({
        duration: joi.string().required(),
        coursecode:joi.string().required()
      }),
      courseSchedule: joi.object().keys({
        qualification: joi.string().required(),
        description: joi.string().required(),
        courcename: joi.string().required(),
        fromdate:joi.string().required(),
        todate:joi.string().required(),
        experience:joi.string().required()
      }),
      courses: joi.object().keys({
        course_code: joi.string().required(),
        course_name: joi.string().required(),
        level:joi.string().required(),
        course_credits:joi.string().required(),
        depname:joi.string().required()
      }),
      departments: joi.object().keys({
        schName: joi.string().required(),
        depName:joi.string().required(),
        levels:joi.string().required()
      }),
      hodinfo: joi.object().keys({
        fname: joi.string().required(),
        lname:joi.string().required(),
        email:joi.string().email().required(),
        phone:joi.string().required(),
        schName:joi.string().required(),
        depName:joi.string().required(),
        password:joi.string().required(),
        confirm_password:joi.string().required()
      }),
      lecturer: joi.object().keys({
        fname: joi.string().required(),
        lname: joi.string().required(),
        email:joi.string().required(),
        phone:joi.string().required(),
        address:joi.string().required(),
        cv_doc_path:joi.string().required(),
        lect_id:joi.string().required(),
        qualification:joi.string().required(),
        category:joi.string().required(),
      }),
      schools: joi.object().keys({
        schoolname: joi.string().required(),
      }),
      university: joi.object().keys({
        univ_name: joi.string().required(),
        province: joi.number().required(),
        district: joi.number().required(),
        sector: joi.number().required(),
        cell: joi.number().required(),
        village: joi.number().required(),
        village: joi.number().required(),
        street: joi.number().required(),
      }),
      users: joi.object().keys({
        firstname: joi.string().required(),
        lastname: joi.string().required(),
        email: joi.string().required(),
        phone: joi.string().required(),
        admintype: joi.string().required(),
        username: joi.string().required(),
        password:joi.string().required(),
        confirm_password:joi.string().required(),
      }),
    };
  }
}

export default new Validator();
