import userService from "../services/UserService";
import {Request,Response} from "express";

const userController = {
    getAll: (req :Request, res :Response) => { return userService.getAllUsers(res)},
    getOneByUserId: (req :Request, res :Response) => { return userService.getOneUserByUserId(req, res)},
    getOneByUserName: (req :Request, res :Response) => { return userService.getOneUserByUserName(req, res)},
    addOne: (req :Request, res :Response) => { return userService.addUser(req, res)},
    updateOne: (req :Request, res :Response) => { return userService.updateUser(req, res)},
    deleteOne: (req :Request, res :Response) => { return userService.deleteUser(req, res)}
}

export default userController;