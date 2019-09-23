import express from 'express';
import bodyParcer from 'body-parser';
import lecturerRouter from './server/routers/LecturerRouter';
import userRouter from './server/routers/UserRouter';
import adminRouer from './server/routers/AdminRouter';
import hodRouter from './server/routers/HodRouter';
import expressSession from 'express-session';

import hbs from 'hbs';
const app = express();
const PORT = process.env.PORT || 6070;
const TWO_HOURS=process.env.TWO_HOURS||1000*60*60*2;
const SESS_NAME='sid';
const SESS_SECRET='olms_secret';
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.urlencoded())
app.use(express.static('F:/my life/pro/ulk/final year project/olms/UI'));
app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({ extended: false }));

app.use(expressSession({
  name:SESS_NAME,
  secret:SESS_SECRET,
  resave:false,
  saveUninitialized:false,
cookie:{
  maxAge:TWO_HOURS,
  sameSite:true,
  secure:false,
}
}));
// app.get('/',(req,res)=>{
//   console.log(req.session);
// });
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.get('/login',(req,res)=>{
 res.render('F:/my life/pro/ulk/final year project/olms/UI/html/login.html');
});

app.use(userRouter);
app.use(adminRouer);
app.use(hodRouter);
app.use(lecturerRouter);
const startServer = (port = '') => {
  const server = app.listen(port || PORT, () => {
    console.log(`\n Server is running on PORT  ${port || PORT}...`);
    console.log();
  });
  return server;
};
startServer();

export default startServer;