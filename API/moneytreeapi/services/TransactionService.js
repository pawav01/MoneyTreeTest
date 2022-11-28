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
    },
    createNewTransaction: async(userId, data) => {
        try{
            const timestamp = new Date().toISOString();
            var response = await Transaction.query().insert({
                UserId: userId,
                Name: data.name,
                CreatedAt: timestamp,
                UpdatedAt: timestamp,
                IsDeleted: false,
                CategoryId: data.categoryId,
                AccountId: data.accountId,
                Amount: data.amount,
                TransactionDate: data.transationDate
            });
            return response;
        } catch(e){
            throw Error('Error while creating new transaction for user')
        }
    },
    updateTransaction: async(transactionId, data) => {
        try{
            var response = await Transaction.query().findById(transactionId).patch({
                Name: data.name,
                UpdatedAt: new Date().toISOString(),
                CategoryId: data.categoryId,
                AccountId: data.accountId,
                Amount: data.amount,
                TransactionDate: data.transationDate
            });
            return response;
        } catch(e) {
            throw Error('Error while updating transaction for user')
        }
    },
    deleteTransaction: async(transactionId) => {
        try{
            var response = await Transaction.query().findById(transactionId).patch({
                IsDeleted: true,
                UpdatedAt: new Date().toISOString()
            });
            return response;
        } catch(e){
            throw Error('Error deleting transaction for user')
        }
    }


}

export default TransactionService;