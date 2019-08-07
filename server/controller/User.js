import joi from 'joi';
import Valitator from '../utils/Validation';
import uuidv4 from 'uuid/v4';
import QueryExecuter from './../db/Exec';
import queryString from './../db/model/query';
import auth from '../utils/auth';
import encoder from 'bd-crypt/dcrypt';


class User{
    constructor(){
        
    }

    async login(req,res){
        joi.validate(req.body,Valitator.Validate.loginSchema).then(()=>{
         var loginName=req.body.user_email;
         var password=req.body.user_password;
 
         QueryExecuter.queryParams(queryString.login,[loginName,password]).then((loginRes)=>{
           if(loginRes.rows[0]){
              QueryExecuter.queryParams(queryString.getUserRole,[loginRes.rows[0].email]).then((roleResult)=>{
                if(roleResult.rows[0].userrole==='admin'){
                  res.render('F:/my life/pro/ulk/final year project/olms/UI/html/admin/dashboard.html');
                }
                else if(roleResult.rows[0].userrole==='hod'){
                 res.render('F:/my life/pro/ulk/final year project/olms/UI/html/hod/dashboard.html');
                }
                else{
                 res.render('F:/my life/pro/ulk/final year project/olms/UI/html/lecturer/dashboard.html');
                }
              });
           }
           else{
             res.status(401).send({
               Status:401,
               Message:"Incorrect data!"
              })  
              res.render('F:/my life/pro/ulk/final year project/olms/UI/html/login.html');         
           }
         });
        }).catch(error => res.status(400).send({
         status: 400,
         error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
       }));
     }
    
     async apiLogin(req,res){
      joi.validate(req.body,Valitator.Validate.loginSchema).then(()=>{
        var loginName=req.body.user_email;
        var password=req.body.user_password;

        QueryExecuter.queryParams(queryString.login,[loginName,password]).then((loginRes)=>{
          if(loginRes){
            auth.generateToken(loginRes.rows[0]).then((token)=>{
              res.status(200).send(
                {
                  TOken:token,
                  Status:200,
                  Message:'Logged in successfully'
                }

              )
            });
          }
        });
       }).catch(error => res.status(400).send({
        status: 400,
        error: { message: error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') },
      }));
     }
}

export default new User();