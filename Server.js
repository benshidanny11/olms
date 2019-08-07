import express from 'express';
import bodyParcer from 'body-parser';
import lecturerRouter from './server/routers/LecturerRouter';
import userRouter from './server/routers/UserRouter';
import adminRouer from './server/routers/AdminRouter';
import hodRouter from './server/routers/HodRouter';
import hbs from 'hbs';
const app = express();
const PORT = process.env.PORT || 6070;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.urlencoded())
app.use(express.static('F:/my life/pro/ulk/final year project/olms/UI'));
app.use(bodyParcer.json());
app.use(bodyParcer.urlencoded({ extended: false }));
app.get('/',(req,res)=>{
 res.send({
   Message:"Welcome to olms"
 })
})
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