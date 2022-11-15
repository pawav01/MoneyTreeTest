import Category from '../models/data/Category.js';

const CategoryService = {

    getAllByUserId:  async (userId) => {
        try{
            var categories  = await Category.query().withGraphJoined('[transactions]').where('Categories.UserId', userId);
        return categories;
        } catch(e) {
            throw Error('Error while getting all categories for user');
        }   
    },

    getById: async (userId, categoryId) => {
        try{
            var category = await Category.query().withGraphJoined('[transactions]').where('Categories.UserId', userId).where('Categories.Id', categoryId);
            return category;
        } catch(e) {
            throw Error('Error while getting specific category for user');
        }
    }

}

export default CategoryService;