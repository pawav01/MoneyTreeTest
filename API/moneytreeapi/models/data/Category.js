import { Model } from 'objection';
import User from './User.js';
import Transaction from './Transaction.js';

class Category extends Model {
    
    static get tableName() {
        return 'Categories';
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
                    from: 'Categories.UserId',
                    to: 'Users.Id'
                }
            },
            transactions: {
                relation: Model.HasManyRelation,
                modelClass: Transaction,
                join: {
                    from: 'Categories.Id',
                    to: 'Transactions.CategoryId'
                }
            }
        }
    }
}

export default Category;