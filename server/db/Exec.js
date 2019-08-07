import pg from 'pg';
//import pool from './connect/connection';
import queryString from './model/query';
import dotenv from 'dotenv';

dotenv.config();
const config = {
  user:  process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSOWRD,
  port: 5432, 
};
const pool = new pg.Pool(config);
class QueryExecutor {
  constructor() {
    this.queryParams = (string, params) => new Promise((resolve, reject) => {
      pool.connect((err, client, done) => {
        if (err) {
          reject(err);
        }
        client.query(string, params).then((rows) => {
          resolve(rows);
        }).catch((error) => {
          reject(error);
        });
        done();
      });
    });
    this.QueryNoParams = string => new Promise((resolve, reject) => {
      pool.connect((err, client, done) => {
        client.query(string).then(({ rows }) => {
          resolve(rows);
        }).catch((error) => {
          reject(error);
        });
        done();
      });
    });
  }
}
export default new QueryExecutor();
