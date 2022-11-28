import AccountService from "../services/AccountService.js";

const AccountController = {

    getAllByUserId: async(req, res, next) => {
        try{
            var response = await AccountService.getAllByUserId(req.params.userId);
            return res.status(200).json(response);
        } catch(e) {
            return res.status(400).json({status: 400, mesage: e.message});
        }
    },
    getById: async(req, res, next) => {
        try{
            var response = await AccountService.getById(req.params.userId, req.params.accountId);
            return res.status(200).json(response);
        } catch(e) {
            return res.status(400).json({status: 400, mesage: e.message});
        }
    },
    createNewAccount: async(req, res, next) => {
        try{
            var response = await AccountService.createNewAccount(req.params.userId, req.body);
            return res.status(200).json(response);
        } catch(e) {
            return res.status(400).json({status: 400, message: e.message});
        }
    },
    updateAccount: async(req, res, next) => {
        try{
            var response = await AccountService.updateAccount(req.params.accountId, req.body);
            return res.status(200).json(response);
        } catch(e){
            return res.status(400).json({status: 400, message: e.message});
        }
    },
    deleteAccount: async(req, res, next) => {
        try{
            var response = await AccountService.deleteAccount(req.params.accountId);
            return res.status(200).json(response);
        } catch (e){
            return res.status(400).json({status: 400, message: e.message});
        }
    }
}

export default AccountController;