import Account from '../models/data/Account.js';
import Transaction from '../models/data/Transaction.js';

const AccountService = {

    getAllByUserId:  async (userId) => {
        try{
            var response  = await Account.query().withGraphJoined('[transactions]').where('Accounts.UserId', userId);
        return response;
        } catch(e) {
            throw Error('Error while getting all accounts for user');
        }   
    },

    getById: async (userId, accountId) => {
        try{
            var response = await Account.query().withGraphJoined('[transactions]').where('Accounts.UserId', userId).where('Accounts.Id', accountId);
            return response;
        } catch(e) {
            throw Error('Error while getting specific account for user');
        }
    },
    createNewAccount: async(userId, data) => {
        try{
            const timestamp = new Date().toISOString();
            var response = await Account.query().insert({
                UserId: userId,
                Name: data.name,
                CreatedAt: timestamp,
                UpdatedAt: timestamp,
                IsDeleted: false
            });
            return response;
        } catch(e){
            throw Error('Error while creating new account for user')
        }
    },
    updateAccount: async(accountId, data) => {
        try{
            var response = await Account.query().findById(accountId).patch({
                Name: data.name,
                UpdatedAt: new Date().toISOString()
            });
            return response;
        } catch(e) {
            throw Error('Error while updating account for user')
        }
    },
    deleteAccount: async(accountId) => {
        try{
            var transactionresponse = await Transaction.query().patch({
                IsDeleted: true,
                UpdatedAt: new Date().toISOString()
            }).where('AccountId', '=', accountId);
            var response = await Account.query().findById(accountId).patch({
                IsDeleted: true,
                UpdatedAt: new Date().toISOString()
            });
            return response;
        } catch(e){
            throw Error('Error deleting account for user')
        }
    }

}

export default AccountService;