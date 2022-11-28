import CategoryService from "../services/CategoryService.js";

const CategoryController = {

    getAllByUserId: async(req, res, next) => {
        try{
            var categories = await CategoryService.getAllByUserId(req.params.userId);
            return res.status(200).json(categories);
        } catch(e) {
            return res.status(400).json({status: 400, mesage: e.message});
        }
    },
    getById: async(req, res, next) => {
        try{
            var category = await CategoryService.getById(req.params.userId, req.params.categoryId);
            return res.status(200).json(category);
        } catch(e) {
            return res.status(400).json({status: 400, mesage: e.message});
        }
    },
    createNewCategory: async(req, res, next) => {
        try{
            var response = await CategoryService.createNewCategory(req.params.userId, req.body);
            return res.status(200).json(response);
        } catch(e) {
            return res.status(400).json({status: 400, message: e.message});
        }
    },
    updateCategory: async(req, res, next) => {
        try{
            var response = await CategoryService.updateCategory(req.params.categoryId, req.body);
            return res.status(200).json(response);
        } catch(e){
            return res.status(400).json({status: 400, message: e.message});
        }
    },
    deleteCategory: async(req, res, next) => {
        try{
            var response = await CategoryService.deleteCategory(req.params.categoryId);
            return res.status(200).json(response);
        } catch (e){
            return res.status(400).json({status: 400, message: e.message});
        }
    }
}

export default CategoryController;