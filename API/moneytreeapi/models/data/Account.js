import { Model } from 'objection';
import User from './User.js';
import Transaction from'./Transaction.js';

class Account extends Model {
    
    static get tableName() {
        return 'Accounts';
    }

    static get idColumn() {
        return 'Id';
    }

    static get relationMappings() {

        return {
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'Accounts.UserId',
                    to: 'Users.Id'
                }
            },
            transactions: {
                relation: Model.HasManyRelation,
                modelClass: Transaction,
                join: {
                    from: 'Accounts.Id',
                    to: 'Transactions.AccountId'
                }
            }
        }
    }
}

export default Account;