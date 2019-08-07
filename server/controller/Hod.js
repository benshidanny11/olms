import joi from 'joi';
import Validator from '../utils/Validation';
import QeryExecutor from '../db/Exec';
import StringQuery from '../db/model/query';
import encoder from 'bd-crypt/dcrypt';
import uuidv4 from 'uuid/v4';
import queryString from '../db/model/query';

class Hod{
    constructor(){

    }

    async postSchedule(req,res){
     joi.validate(req.body,Validator.Validate.courseSchedule).then(()=>{
        // For formating gate.
     const today = new Date();
     const date = today.getDate();
     const month = today.getMonth(); // January is 0!
     const year = today.getFullYear();
     const formatedDate = `${date}/${month}/${year}`;
      var qualification=req.body.qualification;
      var description=req.body.description;
      var courcename=req.body.courcename;
      var fromDate=req.body.fromdate;
      var todate=req.body.todate;
      var experience=req.body.experience;
      var duration=fromDate+"-"+todate;
    
        QeryExecutor.queryParams(StringQuery.getCourceCode,[courcename]).then((resCourse)=>{
            if(resCourse.rows[0]){
              //Check if schedule already exists
            QeryExecutor.queryParams(StringQuery.checkIfCourceExistsInShcedule,[resCourse.rows[0].course_code]).then((courceResult)=>{
              if(courceResult.rows[0]){
                res.status(400).send(
                  {
                  Status:400,
                  Error:'The course is already schedured'   
                  }
                  );
              }else{
                const schedData=[uuidv4(),resCourse.rows[0].course_code,qualification,experience,description,duration,formatedDate];
                QeryExecutor.queryParams(StringQuery.addSchedule,schedData).then((schedRes)=>{
                  if(schedRes){
                      // res.status(201).send(
                      //   {
                      //     Status:201,
                      //     Message:'Schedule added sucessfuly!'
                      //   }  
                      // );
                   res.render('F:/my life/pro/ulk/final year project/olms/UI/html/hodsuccessfuly.html')
                  }
                  else{
                      res.status(400).send(
                      {
                      Status:400,
                      Error:'Not added! '   
                      }
                      );
                  }
                }) ;
              }
            }); 
           
            }else{
            res.status(404).send(
                {
                    Status:401,
                    Error:`This course doesn't exist!`   
                }
                ); 
            }
          });
       
     }).catch(error => res.status(400).send({
        status: 400,
        error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
      }));
    }

    async getAllSchedures(req,res){

    }
    async getAllApplications(req,res){

    }
    async getAllCources(req,res){
      
          QeryExecutor.QueryNoParams(StringQuery.getAllCourses).then((cources)=>{
           if(cources){
             res.status(200).send(
               {
                 Status:200,
                 Cources:cources
               }
             )
           }else{
             {
               res.status(404).send(
                 {
                   Status:404,
                   Users:'No Hod found'
                 }
               )
             }
           }
          }).catch((err)=>{
           res.status(500).send(
             {
               Status:500,
               Error:`Message: ${err.message}`
             }
           )
          });
    }

}

export default new Hod();