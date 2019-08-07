import uuidv4 from 'uuid/v4';
import QueryExecuter from './../db/Exec';
import queryString from './../db/model/query';
import auth from '../utils/auth';
import encoder from 'bd-crypt/dcrypt';
import joi from 'joi';
import Valitator from '../utils/Validation';
import multer from 'multer';
import path from 'path';
class Lecturer{
    constructor(){

    }
    async register(req,res){
    // joi.validate(req.body,Valitator.Validate.lectRegisterSchema).then(()=>{
          // For formating gate.
      
      const today = new Date();
      const date = today.getDate();
      const month = today.getMonth(); // January is 0!
      const year = today.getFullYear();
      const formatedDate = `${date}/${month}/${year}`;
      //storate engine

      const storage=multer.diskStorage({
        destination:__dirname+'/data/uploads',
        filename:function(req,file,callback){
          callback(null,Date.now()+path.extname(file.originalname))
        }
      });
      const upload=multer(
        {
         storage:storage
        }
      ).array('rect_doc',2);
      upload(req,res,(error)=>{
       if(error){
       res.status(500).send({
       Status:500,
       Error:error
       });
       }else{
         console.log(req.files[0]);
        var fname=req.body.fname;
        var lname=req.body.lname;
        var email=req.body.email;
        var phone=req.body.phone;
        var userRole='lecturer';
        var adminType='none';
        var password=req.body.password;
        var address=req.body.address;
        var nationalId=req.body.nationalid;
        var cvPath=req.files[1].path;
        var degreePath=req.files[0].path;
        var qualification=req.body.qualification;
        var category=req.body.category;
        var status='unverified'
        var u_id=uuidv4();
  
        const userData=
        [
          u_id,fname,lname,email,phone,userRole,adminType,email,encoder.encode(password),formatedDate
        ];
        const lecturerData=[ u_id,fname,lname,email,phone,address,nationalId,cvPath,degreePath,qualification,category,status];
  
        QueryExecuter.queryParams(queryString.checkIfUserExists,[email,phone,nationalId]).then((resUser)=>{
         if(resUser.rows[0]){
          res.status(400).send({Status:400,Message:'User already exist'});
         }
         else{
          QueryExecuter.queryParams(queryString.signup,userData).then((result) =>{
              if(result){
               QueryExecuter.queryParams(queryString.register,lecturerData).then((resLect) =>{
                  if(resLect){
                      auth.generateToken(userData).then((token)=>{
                          res.send(
                              {
                              Status:200,
                              Token:token,
                              Message:'Registered successfully'
                              });
                      })
                  }
               });
              }
            });
         }
        }) ;
       }
      });

    //  }).catch(error => res.status(400).send({
    //   status: 400,
    //   error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
    // }));
    }
    async apply(req,res){
      
     joi.validate(req.body,Valitator.Validate.apply).then(()=>{
      var lectId=req.user.id;
      var id=uuidv4();
      var courseCode=req.body.coursecode;
      var status="pending";
      var duration= req.body.duration;
      QueryExecuter.queryParams(queryString.getLecturerUser,[req.user.id]).then((userRes)=>{
        if(userRes.rows[0]){
          QueryExecuter.queryParams(queryString.apply,[id,lectId,courseCode,status,duration]).then((applyRes)=>{
              if(applyRes.rows[0]){
                  res.send(
                      {
                      Status:200,
                      Message:'Appication is sent successfully'
                      }
                      );
              }
          })
        }else{
        res.send({
          Status:400,
          Message:`You are not lecturer` 
        });         
        }
      });
     }).catch(error => res.status(400).send({
      status: 400,
      error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
    }));
    }
    async getAllSchedures(req,res){
     QueryExecuter.queryParams(queryString.getAllSchedule,[]).then((scheduleResult)=>{
      if(scheduleResult){
        res.status(200).send(

          {
            Schedules:scheduleResult.rows
          }
        )
      }else{
        res.status(404).send(
          {
            Status:404,
            Error:'No schedule found'
          }
        )
      }
     });
    }

   
}
export default new Lecturer();