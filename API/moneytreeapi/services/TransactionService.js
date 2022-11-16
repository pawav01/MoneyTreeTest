import Transaction from '../models/data/Transaction.js';

const TransactionService = {

    getAllByUserId:  async (userId) => {
        try{
            var transactions  = await Transaction.query().withGraphJoined('[categories, accounts]').where('Transactions.UserId', userId);
        return transactions;
        } catch(e) {
            throw Error('Error while getting all transactions for user');
        }   
    },

    getById: async (userId, transactionId) => {
        try{
            var transaction = await Transaction.query().withGraphJoined('[categories, accounts]').where('Transactions.UserId', userId).where('Transactions.Id', transactionId);
            return transaction;
        } catch(e) {
            throw Error('Error while getting specific transaction for user');
        }
        
    }

}

export default TransactionService;