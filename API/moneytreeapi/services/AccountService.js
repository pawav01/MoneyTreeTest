import Account from '../models/data/Account.js';

const AccountService = {

    getAllByUserId:  async (userId) => {
        try{
            var accounts  = await Account.query().withGraphJoined('[transactions]').where('Accounts.UserId', userId);
        return accounts;
        } catch(e) {
            throw Error('Error while getting all accounts for user');
        }   
    },

    getById: async (userId, accountId) => {
        try{
            var account = await Account.query().withGraphJoined('[transactions]').where('Accounts.UserId', userId).where('Accounts.Id', accountId);
            return account;
        } catch(e) {
            throw Error('Error while getting specific account for user');
        }
    }

}

export default AccountService;