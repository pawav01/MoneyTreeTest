import path from 'path';
import { fileURLToPath } from 'url';
// Update with your config settings.

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.join(__dirname, 'db.sqlite3')
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    useNullAsDefault: true
  }

};