import { Model } from 'objection';
import User from './User.js';

class Task extends Model {
    
    static get tableName() {
        return 'Tasks';
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
                    from: 'Tasks.UserId',
                    to: 'Users.Id'
                }
            }
        }
    }
}

export default Task;