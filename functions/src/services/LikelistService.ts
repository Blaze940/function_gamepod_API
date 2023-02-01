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