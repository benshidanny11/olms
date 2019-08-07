/* eslint-disable linebreak-style */
// Update with your config settings.
import dotenv from 'dotenv';

dotenv.config();
class ConnectionConfig {
  constructor() {
    this.development = {
      user: 'DannyAdmin',
      database: 'quick-credit',
      password: 'DannyPro123',
      port: 5432,
    };
    this.getConnectionConfig = () => (this.development);
  }
}
export default new ConnectionConfig();
