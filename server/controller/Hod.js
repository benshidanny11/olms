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
      QeryExecutor.queryParams(StringQuery.getAllSchedule,[]).then((scheduleResult)=>{
        if(scheduleResult.rows){
          res.status(200).send({
            Schedules:scheduleResult.rows
          })
        }else{
          res.status(404).send({
            Status:404,
            Error:'No schedule found!'
          })
        }
      });
    }

    async getVerifiedLecturer(req,res){
      QeryExecutor.queryParams(StringQuery.getHodById,[req.params.id]).then((hodResult)=>{
      if(hodResult.rows[0]){
        QeryExecutor.queryParams(StringQuery.getLectuerByCategory,[hodResult.rows[0].shc_name]).then((lectRes)=>{
          if(lectRes.rows){
            res.status(200).send({
              Lecturers:lectRes.rows
            });
          }else{
            res.status(404).send({
              message:'No lecturer found.'
            });
          }
         });
      }else{
        res.status(404).send({
          message:'No hod found.'
        });
      }
      });
    }
    async getAllApplications(req,res){
     QeryExecutor.queryParams(StringQuery.getallApplications,[]).then((applResult)=>{
       if(applResult.rows){
       res.send({
         Application:applResult.rows
       })
       }else{
        res.status(404).send({
          Status:404,
          message:'No application found.'
        }); 
       }
     })
    }
    
    async getAllCourcesForHod(req,res){
          QeryExecutor.queryParams(StringQuery.getHodById,[req.params.id]).then((hodResult)=>{
            if(hodResult.rows[0]){
              QeryExecutor.queryParams(StringQuery.getAllCoursesForHod,[hodResult.rows[0].dep_id]).then((cources)=>{
                if(cources.rows){
                  res.status(200).send(
                    {
                      Status:200,
                      Cources:cources.rows
                    }
                  )
                }else{
                  {
                    res.status(404).send(
                      {
                        Status:404,
                        Users:'No course found'
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
          });
        
    }

}

export default new Hod();