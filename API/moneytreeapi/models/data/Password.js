import { Model } from 'objection';
import User from './User.js';

class Password extends Model {
    
    static get tableName() {
        return 'Passwords';
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
                    from: 'Passwords.UserId',
                    to: 'Users.Id'
                }
            }
        }
    }
}

export default Password;