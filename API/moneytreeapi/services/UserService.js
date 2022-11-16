import User from '../models/data/User.js'

const UserService = {

    getUserById: async (userId) => {
        try {
            var user = await User.query().withGraphJoined('[accounts, categories, transactions, tasks]').where('Users.Id', userId);
            return user;
        } catch (e) {
            throw Error('Error while getting user');
        }
    }

}

export default UserService;