import {Request, Response} from 'express';
import {db} from "../config/firebase"
import {IUser} from "../interfaces/IUser";


const userService = {
    getAllUsers: async (res: Response) => {
        try {
            let users: IUser[] = [];
            const snapshot = await db.collection('users').get();
            snapshot.forEach((doc) => {
                users.push(doc.data() as IUser);
            });
            return res.status(200).json(users);
        } catch (e) {
            return res.status(404).json({message: "Sorry ... No Users found --> " + e});
        }
    },
    getOneUserByUserId: async (req: Request, res: Response) => {
        try {
            let user: IUser = {} as IUser;
            if (req.params.userId === undefined || req.params.userId === "") {
                return res.status(404).json({message: "Sorry ... User with userId " + req.params.userId + " not found --> userId is required"});
            }
            const snapshot = await db.collection('users').where('userId', '==', req.params.userId).get();
            snapshot.forEach((doc) => {
                user = doc.data() as IUser;
            });
            return res.status(200).json(user);
        } catch (e) {
            return res.status(404).json({message: "Sorry ... User with userId " + req.params.userId + " not found --> " + e});
        }
    },
    getOneUserByUserName: async (req: Request, res: Response) => {
        try {
            let user: IUser = {} as IUser;
            if(req.params.username === undefined || req.params.username === ""){
                return res.status(404).json({message: "Sorry ... User with userName "+req.params.username+" not found --> userName is required"});
            }
            const snapshot = await db.collection('users').where('userName', '==', req.params.username).get();
            snapshot.forEach((doc) => {
                user = doc.data() as IUser;
            });
            return res.status(200).json(user);
        } catch (e) {
            return res.status(404).json({message: "Sorry ... User with userName " + req.params.username + " not found --> " + e});
        }
    },
    addUser: async (req: Request, res: Response) => {
        try {
            const user: IUser = req.body;
            if (!user.userId) {
                return res.status(404).json({message: "Sorry ... User with userId " + user.userId + " not added --> userId is required"});
            }
            await db.collection('users').doc().set(user);
            return res.status(200).json({message: "User with userId " + user.userId + " added"});
        } catch (e) {
            return res.status(404).json({message: "Sorry ... User not added --> " + e});
        }
    },
    updateUser: async (req: Request, res: Response) => {
        try {
            const user: IUser = req.body;
            if(!user.userId){
                return res.status(404).json({message: "Sorry ... User with userId "+user.userId+" not updated --> userId is required"});
            }
            await db.collection('users').doc(req.params.userId).update(user);
            return res.status(200).json({message: "User with userId " + req.params.userId + " updated"});
        } catch (e) {
            return res.status(404).json({message: "Sorry ... User with userId " + req.params.userId + " not updated --> " + e});
        }
    },
    deleteUser: async (req: Request, res: Response) => {
        try {
            if(req.params.userId === undefined || req.params.userId === ""){
                return res.status(404).json({message: "Sorry ... User with userId "+req.params.userId+" not deleted --> userId is required"});
            }
            await db.collection('users').doc(req.params.userId).delete();
            return res.status(200).json({message: "User with userId " + req.params.userId + " deleted"});
        } catch (e) {
            return res.status(404).json({message: "Sorry ... User with userId " + req.params.userId + " not deleted --> " + e});
        }
    }
}


export default userService;