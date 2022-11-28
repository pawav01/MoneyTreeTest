import Category from '../models/data/Category.js';

const CategoryService = {

    getAllByUserId:  async (userId) => {
        try{
            var response  = await Category.query().withGraphJoined('[transactions]').where('Categories.UserId', userId);
        return response;
        } catch(e) {
            throw Error('Error while getting all categories for user');
        }   
    },

    getById: async (userId, categoryId) => {
        try{
            var response = await Category.query().withGraphJoined('[transactions]').where('Categories.UserId', userId).where('Categories.Id', categoryId);
            return response;
        } catch(e) {
            throw Error('Error while getting specific category for user');
        }
    },
    createNewCategory: async(userId, data) => {
        try{
            const timestamp = new Date().toISOString();
            var response = await Category.query().insert({
                UserId: userId,
                Name: data.name,
                CreatedAt: timestamp,
                UpdatedAt: timestamp,
                IsDeleted: false,
                Type: data.type,
                Budget: data.budget
            });
            return response;
        } catch(e){
            throw Error('Error while creating new category for user')
        }
    },
    updateCategory: async(categoryId, data) => {
        try{
            var response = await Category.query().findById(categoryId).patch({
                Name: data.name,
                UpdatedAt: new Date().toISOString(),
                Type: data.type,
                Budget: data.budget
            });
            return response;
        } catch(e) {
            throw Error('Error while updating category for user')
        }
    },
    deleteCategory: async(categoryId) => {
        try{
            var transactionresponse = await Transaction.query().patch({
                IsDeleted: true,
                UpdatedAt: new Date().toISOString()
            }).where('CategoryId', '=', categoryId);
            var response = await Category.query().findById(categoryId).patch({
                IsDeleted: true,
                UpdatedAt: new Date().toISOString()
            });
            return response;
        } catch(e){
            throw Error('Error deleting category for user')
        }
    }

}

export default CategoryService;