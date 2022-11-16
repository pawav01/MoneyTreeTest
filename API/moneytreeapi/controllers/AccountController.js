import AccountService from "../services/AccountService.js";

const AccountController = {

    getAllByUserId: async(req, res, next) => {
        try{
            var accounts = await AccountService.getAllByUserId(req.params.userId);
            return res.status(200).json(accounts);
        } catch(e) {
            return res.status(400).json({status: 400, mesage: e.message});
        }
    },
    getById: async(req, res, next) => {
        try{
            var account = await AccountService.getById(req.params.userId, req.params.accountId);
            return res.status(200).json(account);
        } catch(e) {
            return res.status(400).json({status: 400, mesage: e.message});
        }
    }
}

export default AccountController;