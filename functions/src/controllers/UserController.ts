import userService from "../services/UserService";
import {Request,Response} from "express";

const userController = {
    getAll: (req :Request, res :Response) => { return userService.getAllUsers(res)},
    create: (req :Request, res :Response) => { return userService.createUser(req, res) },
}

export default userController;