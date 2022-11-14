import { Model } from 'objection';
import Account from './Account.js';
import Category from './Category.js';
import Transaction from './Transaction.js';
import Task from './Task.js';

class User extends Model {
    
    static get tableName() {
        return 'Users';
    }

    static get idColumn() {
        return 'Id';
    }

    static get relationMappings() {

        return {
            accounts: {
                relation: Model.HasManyRelation,
                modelClass: Account,
                join: {
                    from: 'Users.Id',
                    to: 'Accounts.UserId'
                }
            },
            categories: {
                relation: Model.HasManyRelation,
                modelClass: Category,
                join: {
                    from: 'Users.Id',
                    to: 'Categories.UserId'
                }
            },
            transactions: {
                relation: Model.HasManyRelation,
                modelClass: Transaction,
                join: {
                    from: 'Users.Id',
                    to: 'Transactions.UserId'
                }
            },
            tasks: {
                relation: Model.HasManyRelation,
                modelClass: Task,
                join: {
                    from: 'Users.Id',
                    to: 'Tasks.UserId'
                }
            }
        }
    }
}

export default User;