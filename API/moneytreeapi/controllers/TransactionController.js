import TransactionService from "../services/TransactionService.js";

const TransactionController = {

    getAllByUserId: async(req, res, next) => {
        try{
            var transactions = await TransactionService.getAllByUserId(req.params.userId);
            return res.status(200).json(transactions);
        } catch(e) {
            return res.status(400).json({status: 400, mesage: e.message});
        }
    },
    getById: async(req, res, next) => {
        try{
            var transaction = await TransactionService.getById(req.params.userId, req.params.transactionId);
            return res.status(200).json(transaction);
        } catch(e) {
            return res.status(400).json({status: 400, mesage: e.message});
        }
    },
    createNewTransaction: async(req, res, next) => {
        try{
            var response = await TransactionService.createNewTransaction(req.params.userId, req.body);
            return res.status(200).json(response);
        } catch(e) {
            return res.status(400).json({status: 400, message: e.message});
        }
    },
    updateTransaction: async(req, res, next) => {
        try{
            var response = await TransactionService.updateTransaction(req.params.transactionId, req.body);
            return res.status(200).json(response);
        } catch(e){
            return res.status(400).json({status: 400, message: e.message});
        }
    },
    deleteTransaction: async(req, res, next) => {
        try{
            var response = await TransactionService.deleteTransaction(req.params.transactionId);
            return res.status(200).json(response);
        } catch (e){
            return res.status(400).json({status: 400, message: e.message});
        }
    }
}

export default TransactionController;