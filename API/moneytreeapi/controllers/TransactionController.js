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
    }
}

export default TransactionController;