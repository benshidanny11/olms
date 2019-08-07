/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import queryExecuter from '../db/Exec';
import steringQuery from '../db/model/query';
import queryString from '../db/model/query';
class Auth {
  constructor() {
    dotenv.config();
  }

  async verifyToken(req, res, next) {
    const token = req.headers['olms-access-token'];
    if (!token) {
      return res.status(400).send({
        status: 400,
        error: 'Token is not provided',
      });
    }
    try {
      const decoded = await jwt.verify(token, process.env.JWT_SECRET);
      queryExecuter.queryParams(queryString.getUserById,[decoded.userid]).then((userRes)=>{
        if (userRes == null) {
          res.status(400).send("Invalid token");
        }
        req.user = { id: decoded.userid };
        next();
      });
    } catch (error) {
      return res.status(400).send({
        status: 400,
        error: `Message: ${error.message}`,
      });
    }
  }

  async generateToken(user) {
    const token = jwt.sign({ userid: user.u_id }, process.env.JWT_SECRET, { expiresIn: '40d' });
    return token;
  }

  async getIdfromToken(token) {
    const UserId = await jwt.verify(token, process.env.JWT_SECRET).userid;
    return UserId;
  }
}
export default new Auth();
