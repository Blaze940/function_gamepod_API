import {Request, Response} from 'express';
import {db} from "../config/firebase"
import {ILikelist} from "../interfaces/ILikelist";


const likelistService = {
    getAll : async (req: Request, res: Response) => {
        try{
            let likelists : ILikelist[] = [];
            const snapshot = await db.collection('likelists').get();
            snapshot.forEach((doc) => {
                likelists.push(doc.data() as ILikelist);
            });
            return res.status(200).json(likelists);
        }catch(e){
            return res.status(404).json({message: "Sorry ... No Likelists found --> " + e});
        }
    },
    getOneByUserId : async (req: Request, res: Response) => {
        try{
            let likelist : ILikelist = {} as ILikelist;
            if(req.params.userId === undefined || req.params.userId === ""){
                return res.status(404).json({message: "Sorry ... Likelist with userId "+req.params.userId+" not found --> userId is required"});
            }
            const snapshot = await db.collection('likelists').where('userId', '==', req.params.userId).get();
            snapshot.forEach((doc) => {
                likelist = doc.data() as ILikelist;
            });
            if(likelist.userId === undefined || likelist.userId === ""){
                return res.status(404).json({message: "Sorry ... Likelist with userId "+req.params.userId+" is empty "});
            }
            return res.status(200).json(likelist);
        }catch(e){
            return res.status(404).json({message: "Sorry ... Likelist with userId "+req.params.userId+" not found --> " + e});
        }
    },
    addOne : async (req: Request, res: Response) => {
        try{
            const likelist : ILikelist = req.body;
            if(!likelist.userId){
                return res.status(404).json({message: "Sorry ... Likelist with userId "+likelist.userId+" not added --> userId is required"});
            }
            if(likelist.gamesResumeId === undefined) likelist.gamesResumeId = [""];
            await db.collection('likelists').doc().set(likelist);
            return res.status(200).json({message: "Likelist with userId "+likelist.userId+" added"});
        }catch(e){
            return res.status(404).json({message: "Sorry ... Likelist not added --> " + e});
        }
    },
    updateOne : async (req: Request, res: Response) => {
        try{
            const likelist : ILikelist = req.body;
            if(!likelist.userId){
                return res.status(404).json({message: "Sorry ... Likelist with userId "+likelist.userId+" not updated --> userId is required"});
            }
            await db.collection('likelists').doc(req.params.userId).update(likelist);
            return res.status(200).json({message: "Likelist with userId "+req.params.userId+" updated"});
        }catch(e){
            return res.status(404).json({message: "Sorry ... Likelist with userId "+req.params.userId+" not updated --> " + e});
        }
    },
    addGameResumeId : async (req: Request, res: Response) => {
        try{
            const gameToAdd : string = req.params.gameResumeId;
            if(!gameToAdd){
                return res.status(404).json({message: "Sorry ... GameResumeId "+gameToAdd+" not added --> gameResumeId is required"});
            }
            const likelist : ILikelist = {} as ILikelist;
            let docId : string = "";
            await db.collection('likelists').where('userId', '==', req.params.userId).get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                            likelist.userId = doc.data().userId;
                            likelist.gamesResumeId = doc.data().gamesResumeId;

                        }
                    )
                    docId = snapshot.docs[0].id;
                });
            if(likelist.userId === undefined || likelist.userId === ""){
                return res.status(404).json({message: "Sorry ... likelist with userId "+req.params.userId+" not found --> userId is required"});
            }
            if(docId === ""){
                return res.status(404).json({message: "Sorry ... likelist with userId "+req.params.userId+" not found --> documentId is required"});
            }

            if(likelist.gamesResumeId === undefined) likelist.gamesResumeId = [""];
            likelist.gamesResumeId.push(gameToAdd);
            await db.collection('likelists').doc(docId).update(likelist);
            return res.status(200).json({message: "GameResumeId "+gameToAdd+" added to likelist with userId "+req.params.userId});
        }catch(e){
            return res.status(404).json({message: "Sorry ... GameResumeId "+req.params.gameResumeId+" not added to likelist with userId "+req.params.userId+" --> " + e});
        }
    },
    deleteGameResumeId : async (req: Request, res: Response) => {
        try{
            const gameToDelete : string = req.params.gameResumeId;
            if(!gameToDelete){
                return res.status(404).json({message: "Sorry ... GameResumeId "+gameToDelete+" not deleted --> gameResumeId is required"});
            }
            const likelist : ILikelist = {} as ILikelist;
            let docId : string = "";
            await db.collection('likelists').where('userId', '==', req.params.userId).get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                            likelist.userId = doc.data().userId;
                            likelist.gamesResumeId = doc.data().gamesResumeId;

                        }
                    )
                    docId = snapshot.docs[0].id;
                });
            if(likelist.userId === undefined || likelist.userId === ""){
                return res.status(404).json({message: "Sorry ... likelist with userId "+req.params.userId+" not found --> userId is required"});
            }
            if(docId === ""){
                return res.status(404).json({message: "Sorry ... likelist with userId "+req.params.userId+" not found --> documentId is required"});
            }

            if(likelist.gamesResumeId === undefined) likelist.gamesResumeId = [""];
            likelist.gamesResumeId = likelist.gamesResumeId.filter(game => game !== gameToDelete);
            await db.collection('likelists').doc(docId).update(likelist);
            return res.status(200).json({message: "GameResumeId "+gameToDelete+" deleted from likelist with userId "+req.params.userId});
        }catch(e){
            return res.status(404).json({message: "Sorry ... GameResumeId "+req.params.gameResumeId+" not deleted from likelist with userId "+req.params.userId+" --> " + e});
        }
    },
    deleteOne : async (req: Request, res: Response) => {
        try{
            if(req.params.userId === undefined || req.params.userId === ""){
                return res.status(404).json({message: "Sorry ... Likelist with userId "+req.params.userId+" not deleted --> userId is required"});
            }
            await db.collection('likelists').doc(req.params.userId).delete();
            return res.status(200).json({message: "Likelist with userId "+req.params.userId+" deleted"});
        }catch(e){
            return res.status(404).json({message: "Sorry ... Likelist with userId "+req.params.userId+" not deleted --> " + e});
        }
    }
}

export default likelistService;