import UserService from "../services/UserService.js";

const UserController = {

    getUserById: async (req, res, next) => {
        try{
            var user = await UserService.getUserById(req.params.userId);
            return res.status(200).json(user);
        } catch(e) {
            return res.status(400).json({status: 400, mesage: e.message});
        }
    }
}

export default UserController;