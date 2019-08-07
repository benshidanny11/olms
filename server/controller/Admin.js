import joi from 'joi';
import Validator from '../utils/Validation';
import QeryExecutor from '../db/Exec';
import StringQuery from '../db/model/query';
import encoder from 'bd-crypt/dcrypt';
import uuidv4 from 'uuid/v4';
import queryString from '../db/model/query';
class Admin{

    constructor(){

    }
    async addAdmin(req,res){
        const today = new Date();
        const date = today.getDate();
        const month = today.getMonth(); // January is 0!
        const year = today.getFullYear();
        const formatedDate = `${date}/${month}/${year}`;
      joi.validate(req.body,Validator.Validate.users).then(()=>{
                var firstname =req.body.firstname;
                var lastname =req.body.lastname;
                var email =req.body.email;
                var phone =req.body.phone;
                var admintype =req.body.admintype;
                var username =req.body.username;
                var password =encoder.encode(req.body.password); 
                var u_id=uuidv4();
                const adminData=[u_id,firstname,lastname,email,phone,'admin',admintype,username,password,formatedDate];
                QeryExecutor.queryParams(queryString.checkIfAdminExists,[email,phone]).then((resExist)=>{
                  if(resExist.rows[0]){
                   
                    res.status(400).send({
                      Status:400,
                      Error:"Admin alread exists", 
                    });
                  }else{
                    QeryExecutor.queryParams(queryString.signup,adminData).then((adminRes)=>{
                      if(adminRes){
                       // console.log(resExist);
                          // res.status(201).send(
                          //     {
                          //         Status:201,
                          //         Message:"Admin is added successfully",
                          //     }
                          //     );
                          res.render('F:/my life/pro/ulk/final year project/olms/UI/html/successfully.html');
                      }
                      else{
                        res.send({
                          Status:400,
                          Error:"Not added", 
                        })  
                      }
                  })
                  .catch((err)=>{
                      res.send({
                          Status:400,
                          Error:err, 
                        }) 
                  });
                  }
                });
               
         
      }).catch(error => res.status(400).send({
        status: 400,
        error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
      }));
    }
    async addHod(req,res){
        joi.validate(req.body,Validator.Validate.hodinfo).then(()=>{
                        // For formating gate.
          const today = new Date();
          const date = today.getDate();
          const month = today.getMonth(); // January is 0!
          const year = today.getFullYear();
          const formatedDate = `${date}/${month}/${year}`;
          var fname=req.body.fname;
          var lname=req.body.lname;
          var email=req.body.email;
          var phone=req.body.phone;
          var schName=req.body.schName;
          var depName=req.body.depName;
          var password=req.body.password;
          
         
              QeryExecutor.queryParams(StringQuery.getDepartmentId,[depName]).then((depIdRes)=>{
                if(depIdRes.rows[0]){
                  QeryExecutor.queryParams(StringQuery.getChoolId,[schName]).then((schIdRes)=>{
                    if(schIdRes.rows[0]){
                    var id=uuidv4();
                    const hodData=[id,fname,lname,email,phone,schIdRes.rows[0].shc_name,depIdRes.rows[0].dep_name];
                    const userData=
                    [
                      id,fname,lname,email,phone,'hod','none',email,encoder.encode(password),formatedDate
                    ];
                     QeryExecutor.queryParams(StringQuery.chechIfHodExists,[email,phone]).then((hodExistsRes)=>{
                     if(hodExistsRes.rows[0]){
                       console.log(hodExistsRes.rows[0]);
                      res.status(400).send({
                        Status:400,
                        Error:"Hod alread exists", 
                      });
                     }
                     else{
                      QeryExecutor.queryParams(StringQuery.signup,userData).then((signUpRes)=>{
                        if(signUpRes){

                          QeryExecutor.queryParams(queryString.addHod,hodData).then((addHodRes)=>{
                            if(addHodRes){
                              // res.send(
                              //   {
                              //    Status:201,
                              //    Message:"Hod added successfully"
                              //   }
                              //   )
                                res.render('F:/my life/pro/ulk/final year project/olms/UI/html/successfully.html');
                            }else{
                              res.send({
                                Status:400,
                                Error:"Not added", 
                              }) 
                            }
                          });
                        }else{
                          res.send({
                            Status:400,
                            Error:"Not added", 
                          })
                        }
                        }).catch((err)=>{
                          res.send({
                            Status:400,
                            Error:`Message: ${err.message}`, 
                          })
                        });
                     }
                     });
                    }else{
                     res.send({
                       Status:400,
                       Error:"This faculty doent exist", 
                     }) 
                    }
                  }
                )
                }else{
                 res.send({
                   Status:400,
                   Error:"This department doent exist", 
                 })  
                }
               });
            
        }).catch(error => res.status(400).send({
            status: 400,
            error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
          }));
    }
    async getAllAdmins(req,res){
    //  QeryExecutor.queryParams(queryString.getAdminUser,[req.user.id]).then((adminRes)=>{
    //    if(adminRes){
         QeryExecutor.QueryNoParams(StringQuery.getAllAdmins).then((users)=>{
          if(users){
            res.status(200).send(
              {
                Status:200,
                Users:users
              }
            )
          }else{
            {
              res.status(404).send(
                {
                  Status:404,
                  Users:'No user found'
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
    //    }else{
    //     res.status(400).send(
    //       {
    //         Status:400,
    //         Users:`You're not an admin`
    //       }
    //     )  
    //    }
    //  }).catch((err)=>{
    //   res.status(500).send(
    //     {
    //       Status:500,
    //       Error:`Message: ${err.message}`
    //     }
    //   )
    //  })
    }

async getAllHods(req,res){
  // QeryExecutor.queryParams(queryString.getAdminUser,[req.user.id]).then((adminRes)=>{
  //   if(adminRes){
      QeryExecutor.queryParams(StringQuery.getAllHods1,[]).then((hods)=>{
       if(hods){
        // [{names:`${hods.rows[0].fname} ${hods.rows[0].lname}`,email:hods.rows[0].email,department:depRes.rows[0].dep_name,school:schRes.rows[0].shc_name,}]
         var hodlist=[];
         res.status(200).send(
          {
            Status:200,
            Hods:hods.rows
          }
        )
        //  QeryExecutor.queryParams(StringQuery.getDepById,[hods.rows[0].dep_id]).then((depRes)=>{
        //    if(depRes.rows[0]){
        //      QeryExecutor.queryParams(StringQuery.getschById,[hods.rows[0].sch_id]).then((schRes)=>{
        //       if(schRes.rows[0]){
        //        // hodlist=hodlist.rows;
            
                
        //       }else{
        //         res.status(404).send(
        //           {
        //             Status:404,
        //             Mesage:'No school found'
        //           }
        //         )
        //       }
        //      });
        //    }else{
        //     res.status(404).send(
        //       {
        //         Status:404,
        //         Mesage:'No department found'
        //       }
        //     )
        //    }
        //  });
       }else{
         {
           res.status(404).send(
             {
               Status:404,
               Mesage:'No Hod found'
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
  //   }else{
  //    res.status(400).send(
  //      {
  //        Status:400,
  //        Users:`You're not an admin`
  //      }
  //    )  
  //   }
  // }).catch((err)=>{
  //  res.status(500).send(
  //    {
  //      Status:500,
  //      Error:`Message: ${err.message}`
  //    }
  //  )
  // })   
}

 async addDepartment(req,res){
  joi.validate(req.body,Validator.Validate.departments).then(()=>{
    var schName=req.body.schName;
    var depName=req.body.depName;
    var levels=req.body.levels;

       
        QeryExecutor.queryParams(StringQuery.getChoolId,[schName]).then((schIdRes)=>{
          if(schIdRes.rows[0]){
          const depData=[uuidv4(),schIdRes.rows[0].sch_id,depName,levels];
            QeryExecutor.queryParams(StringQuery.chechIfDepartmentExists,[depName]).then((hodExistsRes)=>{
            if(hodExistsRes.rows[0]){
            res.status(400).send({
              Status:400,
              Error:"Department alread exists", 
            });
            }
            else{
            QeryExecutor.queryParams(queryString.addDepartment,depData).then((addHodRes)=>{
              if(addHodRes){
                // res.send(
                // {
                // Status:201,
                // Message:"Department added successfully"
                // }
                // )
                res.render('F:/my life/pro/ulk/final year project/olms/UI/html/successfully.html');

              }else{
                res.send({
                  Status:400,
                  Error:"Not added", 
                }) 
              }
            });
            }
            });
          }else{
            res.send({
              Status:400,
              Error:"This faculty doent exist", 
            }) 
          }
        }
      )
         
    
  }).catch(error => res.status(400).send({
      status: 400,
      error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
    }));
 }
 async addSchool(req,res){
  joi.validate(req.body,Validator.Validate.schools).then(()=>{
    var schName=req.body.schoolname;
    
    const schData=[uuidv4(),schName];
      QeryExecutor.queryParams(StringQuery.chechIfSchoolExist,[schName]).then((hodExistsRes)=>{
      if(hodExistsRes.rows[0]){
      res.status(400).send({
        Status:400,
        Error:"Faculty already exists", 
      });
      }
      else{
      QeryExecutor.queryParams(queryString.addSchool,schData).then((addHodRes)=>{
        if(addHodRes){
        //  res.send(
        //  {
        //   Status:201,
        //   Message:"Faculty added successfully"
        //  }
        //  );
        res.render('F:/my life/pro/ulk/final year project/olms/UI/html/successfully.html');  
        }else{
          res.send({
            Status:400,
            Error:"Not added", 
          }) 
        }
      });
      }
      });
      
  }).catch(error => res.status(400).send({
      status: 400,
      error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
    }));
 }
 async addCource(req,res){
  joi.validate(req.body,Validator.Validate.courses).then(()=>{
    var cCode=req.body.course_code;
    var cName=req.body.course_name;
    var level=req.body.level;
    var cCredit=req.body.course_credits;
    var depName=req.body.depname;
    
        QeryExecutor.queryParams(StringQuery.getDepartmentId,[depName]).then((depIdRes)=>{
          if(depIdRes.rows[0]){        
              const courceData=[cCode,cName,level,cCredit,depIdRes.rows[0].dep_id];
               QeryExecutor.queryParams(StringQuery.checkIfCourseExitist,[cCode,cName]).then((cExistsRes)=>{
               if(cExistsRes.rows[0]){
                res.status(400).send({
                  Status:400,
                  Error:"Cource alread exists", 
                });
               }
               else{
                QeryExecutor.queryParams(queryString.addCourse,courceData).then((addCourceRes)=>{
                  if(addCourceRes){
                  //  res.status(201).send(
                  //  {
                  //   Status:201,
                  //   Message:"Cource added successfully"
                  //  }
                  //  )
                   res.render('F:/my life/pro/ulk/final year project/olms/UI/html/successfully.html');
                  }else{
                    res.send({
                      Status:400,
                      Error:"Not added", 
                    }) 
                  }
                });
               }
               });
            
          }else{
           res.status(404).send({
             Status:404,
             Error:"This department doent exist", 
           })  
          }
         });
    
  }).catch(error => res.status(400).send({
      status: 400,
      error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
    }));
 }
 async allLecturers(req,res){
   QeryExecutor.queryParams(StringQuery.getAllLectulers,[]).then((lectRes)=>{
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
 }
 async allFaculties(req,res){
  QeryExecutor.queryParams(StringQuery.getAllSchools,[]).then((facResult)=>{
   if(facResult.rows){
     res.status(200).send(
       {
         Schools:facResult.rows
       }
     )
   }
   else{
    res.status(404).send(
      {
        Eroor:"No faculty found!"
      }
    )
   }
  });
 }
 async allDepartments(req,res){
  QeryExecutor.queryParams(StringQuery.getAllDepartments,[]).then((depResult)=>{
    if(depResult.rows){
      res.status(200).send(
        {
          Departments:depResult.rows
        }
      )
    }
    else{
     res.status(404).send(
       {
         Eroor:"No faculty found!"
       }
     )
    }
   });
 }
 async allCourses(req,res){
  QeryExecutor.queryParams(StringQuery.getAllCourses,[]).then((courseResult)=>{
    if(courseResult.rows){
      res.status(200).send(
        {
          Cources:courseResult.rows
        }
      )
    }
    else{
     res.status(404).send(
       {
         Eroor:"No faculty found!"
       }
     )
    }
   });
 }
 
}
export default new Admin();