import Task from '../models/data/Task.js';

const TaskService = {

    getAllByUserId:  async (userId) => {
        try{
            var tasks  = await Task.query().where('Tasks.UserId', userId);
        return tasks;
        } catch(e) {
            throw Error('Error while getting all tasks for user');
        }   
    },

    getById: async (userId, taskId) => {
        try{
            var task = await Task.query().where('Tasks.UserId', userId).where('Tasks.Id', taskId);
            return task;
        } catch(e) {
            throw Error('Error while getting specific category for user');
        }
    }

}

export default TaskService;