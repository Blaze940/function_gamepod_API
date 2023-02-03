import {Request, Response} from 'express';
 import {db} from "../config/firebase"
import {IWishlist} from "../interfaces/IWishlist";

const wishlistService = {
    getAll : async (req: Request, res: Response) => {
        try{
            let wishlists : IWishlist[] = [];
            const snapshot = await db.collection('wishlists').get();
            snapshot.forEach((doc) => {
                wishlists.push(doc.data() as IWishlist);
            });
            return res.status(200).json(wishlists);
        }catch(e){
            return res.status(404).json({message: "Sorry ... No Wishlists found --> " + e});
        }
    },
    getOneByUserId : async (req: Request, res: Response) => {
        try{
            let wishlist : IWishlist = {} as IWishlist;
            if(req.params.userId === undefined || req.params.userId === ""){
                return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" not found --> userId is required"});
            }
            const snapshot = await db.collection('wishlists').where('userId', '==', req.params.userId).get();
            snapshot.forEach((doc) => {
                wishlist = doc.data() as IWishlist;
            });
            if(wishlist.userId === undefined || wishlist.userId === ""){
                return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" is empty" });
            }
            return res.status(200).json(wishlist);
        }catch(e){
            return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" not found --> " + e});
        }
    },
    addOne : async (req: Request, res: Response) => {
        try{
            const wishlist : IWishlist = req.body;
            if(!wishlist.userId){
                return res.status(404).json({message: "Sorry ... Wishlist with userId "+wishlist.userId+" not added --> userId is required"});
            }
            if(wishlist.gamesResumeId === undefined) wishlist.gamesResumeId = [""];

            await db.collection('wishlists').doc().set(wishlist);
            return res.status(200).json({message: "Wishlist with userId "+wishlist.userId+" added"});
        }catch(e){
            return res.status(404).json({message: "Sorry ... Wishlist with not added --> " + e});
        }
    },
    updateOne : async (req: Request, res: Response) => {
        try{
            const wishlist : IWishlist = req.body;
            if(!wishlist.userId){
                return res.status(404).json({message: "Sorry ... Wishlist with userId "+wishlist.userId+" not updated --> userId is required"});
            }
            await db.collection('wishlists').doc(req.params.userId).update(wishlist);
            return res.status(200).json({message: "Wishlist with userId "+req.params.userId+" updated"});
        }catch(e){
            return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" not updated --> " + e});
        }
    },
    addGameResumeId : async (req: Request, res: Response) => {
        try{
            const gameToAdd : string = req.params.gameResumeId;
            if(!gameToAdd){
                return res.status(404).json({message: "Sorry ... GameResumeId "+gameToAdd+" not added --> gameResumeId is required"});
            }
            const wishlist : IWishlist = {} as IWishlist;
            let docId : string = "";
            await db.collection('wishlists').where('userId', '==', req.params.userId).get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        wishlist.userId = doc.data().userId;
                        wishlist.gamesResumeId = doc.data().gamesResumeId;

                    }
                    )
                    docId = snapshot.docs[0].id;
                });
            if(wishlist.userId === undefined || wishlist.userId === ""){
                return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" not found --> userId is required"});
            }
            if(docId === ""){
                return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" not found --> documentId is required"});
            }

            if(wishlist.gamesResumeId === undefined) wishlist.gamesResumeId = [""];
            wishlist.gamesResumeId.push(gameToAdd);
            await db.collection('wishlists').doc(docId).update(wishlist);
            return res.status(200).json({message: "GameResumeId "+gameToAdd+" added to Wishlist with userId "+req.params.userId});
        }catch(e){
            return res.status(404).json({message: "Sorry ... GameResumeId "+req.params.gameResumeId+" not added to wishlist with userId "+req.params.userId+" --> " + e});
        }
    },
    deleteGameResumeId : async (req: Request, res: Response) => {
        try{
            const gameToDelete : string = req.params.gameResumeId;
            if(!gameToDelete){
                return res.status(404).json({message: "Sorry ... GameResumeId "+gameToDelete+" not deleted --> gameResumeId is required"});
            }
            const wishlist : IWishlist = {} as IWishlist;
            let docId : string = "";
            await db.collection('wishlists').where('userId', '==', req.params.userId).get()
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        wishlist.userId = doc.data().userId;
                        wishlist.gamesResumeId = doc.data().gamesResumeId;
                    })
                    docId = snapshot.docs[0].id;
                });
            if(wishlist.userId === undefined || wishlist.userId === ""){
                return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" not found --> userId is required"});
            }
            if(docId === ""){
                return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" not found --> documentId is required"});
            }
            if(wishlist.gamesResumeId === undefined) wishlist.gamesResumeId = [""];
            wishlist.gamesResumeId = wishlist.gamesResumeId.filter((gameResumeId) => gameResumeId !== gameToDelete);
            await db.collection('wishlists').doc(docId).update(wishlist);
            return res.status(200).json({message: "GameResumeId "+gameToDelete+" deleted from Wishlist with userId "+req.params.userId});
        }catch(e){
            return res.status(404).json({message: "Sorry ... GameResumeId "+req.params.gameResumeId+" not deleted from wishlist with userId "+req.params.userId+" --> " + e});
        }
    },
    deleteOne : async (req: Request, res: Response) => {
        try{
            if(req.params.userId === undefined || req.params.userId === ""){
                return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" not deleted --> userId is required"});
            }
            await db.collection('wishlists').doc(req.params.userId).delete();
            return res.status(200).json({message: "Wishlist with userId "+req.params.userId+" deleted"});
        }catch(e){
            return res.status(404).json({message: "Sorry ... Wishlist with userId "+req.params.userId+" not deleted --> " + e});
        }
    }
}

export default wishlistService;