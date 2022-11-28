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
            throw Error('Error while getting specific task for user');
        }
    },
    createNewTask: async(userId, data) => {
        try{
            const timestamp = new Date().toISOString();
            var response = await Task.query().insert({
                UserId: userId,
                Name: data.name,
                CreatedAt: timestamp,
                UpdatedAt: timestamp,
                IsDeleted: false,
                ScheduledAt: data.scheduledAt
            });
            return response;
        } catch(e){
            throw Error('Error while creating new task for user')
        }
    },
    updateTask: async(taskId, data) => {
        try{
            var response = await Task.query().findById(taskId).patch({
                Name: data.name,
                UpdatedAt: new Date().toISOString(),
                ScheduledAt: data.scheduledAt
            });
            return response;
        } catch(e) {
            throw Error('Error while updating task for user')
        }
    },
    deleteTask: async(taskId) => {
        try{
            var response = await Task.query().findById(taskId).patch({
                IsDeleted: true,
                UpdatedAt: new Date().toISOString()
            });
            return response;
        } catch(e){
            throw Error('Error deleting task for user')
        }
    }

}

export default TaskService;