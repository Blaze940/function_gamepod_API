import {Request, Response} from 'express';
import wishlistService from "../services/WishlistService";

const wishlistController = {
    getAll: (req: Request, res: Response) => { return wishlistService.getAll(req, res) },
    getOneByUserId: (req: Request, res: Response) => { return wishlistService.getOneByUserId(req, res) },
    addOne: (req: Request, res: Response) => { return wishlistService.addOne(req, res) },
    updateOne: (req: Request, res: Response) => { return wishlistService.updateOne(req, res) },
    addOneGameResumeId: (req: Request, res: Response) => { return wishlistService.addGameResumeId(req, res) },
    deleteOneGameResumeId: (req: Request, res: Response) => { return wishlistService.deleteGameResumeId(req, res) },
    deleteOne: (req: Request, res: Response) => { return wishlistService.deleteOne(req, res) },
}

export default wishlistController;