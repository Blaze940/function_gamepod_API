import {Request, Response} from 'express';
import {db} from "../config/firebase"
//const db = getFirestore(firebaseConf);
// const serviceAccount = require('../../firebase.json');
//
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

//const db = admin.firestore();

const steamUserResumeService = {
    getAllSteamUserResumes: async (res: Response) => {

    },
    getSteamUserResumeBySteamId: async (req: Request, res: Response) => {

    }
}

export default steamUserResumeService;


