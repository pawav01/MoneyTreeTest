import { Model } from 'objection';
import Account from './Account.js';
import Category from './Category.js';
import User from './User.js';

class Transaction extends Model {
    
    static get tableName() {
        return 'Transactions';
    }

    static get idColumn() {
        return 'Id';
    }

    static get relationMappings() {

        return {
            accounts: {
                relation: Model.BelongsToOneRelation,
                modelClass: Account,
                join: {
                    from: 'Transactions.AccountId',
                    to: 'Accounts.Id'
                }
            },
            categories: {
                relation: Model.BelongsToOneRelation,
                modelClass: Category,
                join: {
                    from: 'Transactions.CategoryId',
                    to: 'Categories.Id'
                }
            },
            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'Transactions.UserId',
                    to: 'Users.Id'
                }
            }
        }
    }
}

export default Transaction;