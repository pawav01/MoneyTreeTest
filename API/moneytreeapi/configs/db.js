import knex from 'knex';
import config from '../database/knexfile.js';
import { Model } from 'objection';

function setupDb() {
    const db = knex(config.development);
    Model.knex(db);
}

export default setupDb;