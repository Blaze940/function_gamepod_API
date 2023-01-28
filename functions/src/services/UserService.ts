import {Request, Response} from 'express';
import {db} from "../config/firebase"

// const serviceAccount = require('../../firebase.json');
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

//const db = admin.firestore();

const userService = {
    getAllUsers: async (res: Response) => {

    },
    createUser: async (req: Request, res: Response) => {

    },
}

export default userService;